const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //entry: './src/index.js' - если надо указать другую точку входа
    module: {
      rules: [
        {
          test: /\.txt$/,
          loader: 'raw-loader'
        },
        {
          test: /\.css$/,
          use: [
            MiniCSSExtractPlugin.loader,
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        // filename: 'main.html'    - можем переименовать фаил таким образом
      }),
      new MiniCSSExtractPlugin()
    ]
}
