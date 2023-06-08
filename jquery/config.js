const path    = require('path'),
      webpack = require("webpack")

module.exports = {
    entry: path.resolve(__dirname, `../../src/index.js`),
    output: {
        chunkFilename: `[name].[hash:4].bundle.js`,
        hashDigestLength : 4,
        filename: "[name].js",
        path: path.resolve(__dirname, `../dict/`)
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
}