const path = require('path')
module.exports = {
    entry: "./src/style.scss",
    output: {
        hashDigestLength : 4,
        path: path.resolve(__dirname, `../_dict/`),
        filename: 'js/[name].[hash].js',
    },
    module: {
        rules: [{
            test: /\.(scss)$/,
            use: [ "css-loader", "sass-loader" ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
}