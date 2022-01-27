const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

const { resolve } = require('path')

module.exports = {
  mode: 'production',
  entry: {
    router: './router.js',
    app: './index.js'
  },

  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].js'
  },

  devServer: {
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // output file name
      template: 'index.html'  // template file name
    }),
    new MiniCssExtractPlugin({ filename: 'app.css' }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
    // 환경 변수 등록/관리 설정
    new webpack.EnvironmentPlugin({
      API: 'http://localhost:5000'
    })
  ],

  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            // publicPath: '/build/',
            name: '[name].[ext]',
            // outputPath: 'dist/',
            // useRelativePaths: true,
          }
        }],
      },
      // {
      //   test: /\.(jpg|jpeg|png|gif)$/,
      //   use: ['file-loader'],
      // },
    ]
  }
}