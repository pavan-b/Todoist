var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 devtool: 'cheap-module-eval-source-map',
 entry: {
   app: [

    path.join(__dirname, "webclient", "clientapp.jsx")]
 },
 output: {
   path: path.join(__dirname, "webclient", "dist"),
   publicPath: "/dist/",
   filename: "bundle.js"
 },

 module: {
     loaders: [ {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }]
 },
 watch:true,
 resolve: {
   extensions: ['', '.js', '.jsx', '/index.js', '/index.jsx']
 },
 plugins: [new webpack.optimize.OccurenceOrderPlugin(),
       new webpack.HotModuleReplacementPlugin(),
       new webpack.NoErrorsPlugin(),
       new HtmlWebpackPlugin({ template: path.resolve('./webclient/index.html') })]
};
