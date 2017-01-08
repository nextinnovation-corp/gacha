const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: '#cheap-eval-source-map',

  entry: {
    client: [
      'webpack-hot-middleware/client',
      './client/index.js']
  },

  output: {
    path: path.resolve('./build/client'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        // https://github.com/babel/babel-loader#options
        cacheDirectory: './build/cache',

        // https://babeljs.io/docs/usage/options/
        babelrc: true,
      },
    }, {
      test: /\.css$/,
      loaders: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[path][name]-[local]',
        },
      }]
    }],
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    }),
  ]
};
