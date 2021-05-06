const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
// const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

module.exports = {
    entry: './bootstrap.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bootstrap.js'
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.wasm$/,
    //             type: 'webassembly/experimental',
    //         }
    //     ]
    // },
    plugins: [
        new CopyWebpackPlugin(['index.html'])
        // new HtmlWebpackPlugin(),
        // new WasmPackPlugin({
        //     crateDirectory: path.resolve(__dirname, '.')
        // }),
        // new webpack.ProvidePlugin({
        //     TextDecoder: ['text-encoding', 'TextDecoder'],
        //     TextEncoder: ['text-encoding', 'TextEncoder']
        // })
    ],
    mode: 'development',
    experiments: {
        syncWebAssembly: true, // webpack >=5, webpack cli => 4需要配置
        // importAsync: true
    }
}