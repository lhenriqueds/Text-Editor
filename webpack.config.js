const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
        }),
    ],
};