const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = 'style-loader';

const config = {
    entry: './src/main.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/public',
    },
    devServer: {
        open: true,
        host: 'localhost',
        port: 8000,
        static: {
            directory: path.join(__dirname, '/public')
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader'],
            },
            {
                test: /\.less$/i,
                use: [stylesHandler, 'css-loader', 'less-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            }
        ],
    },
    optimization: {
        minimize: false,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '...'],
    },
};

module.exports = () => {
    config.mode = isProduction ? 'production' : 'development';

    return config;
};
