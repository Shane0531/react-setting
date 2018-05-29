const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './app/js/components/App.js'
  },
  output: {
    path: __dirname + '/public/',
    filename: '[name].[chunkhash].js',
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: true,
      filename: 'index.html'

    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};