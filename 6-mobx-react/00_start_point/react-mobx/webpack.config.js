var debug   = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path    = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./js/client.js",
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
        options: {
          plugins: [
            'react-html-attrs',
            ['@babel/plugin-proposal-decorators', {legacy: true}],
            ["@babel/plugin-proposal-class-properties", { loose: true }]
          ],
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }]
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js",
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: debug ? [] : [
    /* Search for equal or similar files and deduplicate them in the output. */
    // new webpack.optimize.DedupePlugin(), /* It has been removed since Webpack 2 */
    /* Assign the module nad chunk ids by occurrence count.
       Ids that are used often get lower (shorter) ids.
       This make ids predictable reduces total file size and is recommended. */
    new webpack.optimize.OccurrenceOrderPlugin(),
    /* UglifyJS Webpack Plugin */
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
