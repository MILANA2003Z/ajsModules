const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // Точка входа
  entry: "./src/index.js",

  // Вывод сборки
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true, // очищает dist перед сборкой
  },

  module: {
    rules: [
      // JS через Babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      // HTML
      {
        test: /\.html$/,
        use: "html-loader",
      },
      // CSS
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],

  // devServer для npm start
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    open: true,
  },

  mode: "development", // по умолчанию
};
