const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name]-[contenthash:8].js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 4 * 1024
            },
          }
        ],
        type: 'javascript/auto'
      },
      {
        test: /\.less|css$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "../src/"),
      "@pages": path.resolve(__dirname, "../src/pages/"),
      "@static": path.resolve(__dirname, "../src/static/"),
      "@utils": path.resolve(__dirname, "../src/utils/"),
      "@service": path.resolve(__dirname, "../src/service/"),
      "@constant": path.resolve(__dirname, "../src/constant/")
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    })
  ]
};
