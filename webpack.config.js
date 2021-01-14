const path = require('path') // Для работы с путями
const HtmlWebpackPlugin = require('html-webpack-plugin') // Плагин для работы с HTML
const {CleanWebpackPlugin} = require('clean-webpack-plugin') // Для очистки папки output
const CopyWebpackPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const terserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development' // определяем в каком режиме(mode) запущен проект
const isProd = !isDev

optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all"
        }
    }
    if (isProd) {
        config.minimizer = [
            new OptimizeCSSAssetsWebpackPlugin(),
            new terserWebpackPlugin()
        ]
    }

    return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const cssLoaders = extraLoader => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                publicPath: ''
            },
        }
        , 'css-loader'
    ]

    if (extraLoader) {
        loaders.push(extraLoader)
    }

    return loaders
}

const bableOptions = (preset) => {
    const options = {
        presets: [
            '@babel/preset-env',
        ],
        plugins: ['@babel/plugin-proposal-class-properties']
    }
    if (preset) {
        options.presets.push(preset)
    }

    return options
}

module.exports = {
    context: path.resolve(__dirname, 'src'), // Указываем папку проекта, остальные пути уже указываем относительно этой папки
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.ts'],
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist') // __dirname - системный путь до проекта
    },
    resolve: {
        extensions: ['.js', '.ts']
    },

    devtool: isProd ? false : "source-map",

    optimization: optimization(),

    devServer: {
        port: 4200,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'en/en.html',
            template: './en/en.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'ru/ru.html',
            template: './ru/ru.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist/en')
                },
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist/ru')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/'),
                    to: path.resolve(__dirname, 'dist/assets/img/')
                },

            ],
        }),
        // new CopyWebpackPlugin({
        //     patterns: [{
        //         from: path.resolve(__dirname, 'src/favicon.ico'),
        //         to: path.resolve(__dirname, 'dist/en')
        //     }],
        // }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),

    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders(),
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader'),
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.xml$/,
                loader: 'xml-loader'
            },
            {
                test: /\.csv$/,
                loader: 'csv-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: bableOptions()
                }
            },
            {
                test: /\.m?ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: bableOptions('@babel/preset-typescript')
                }
            },
        ],
    },
}