const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');
const { prototype } = require('html-webpack-plugin');

 module.exports = merge(common, {
   mode: 'development',
   devtool: 'eval-source-map',
   devServer: {
    static: './dist',
    watchFiles: ["./src/template.html"],
   },
 });