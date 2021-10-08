const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(process.env.NODE_ENV);
module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    app: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name]-[contenthash:8].js',
    // publicPath: './dist',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4 * 1024,
              outputPath: './images'
            },
          },
        ],
        type: 'javascript/auto',
      },
      {
        test: /\.(ogg|mp3)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './music'
            }
          }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.less|css$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '../src/'),
      '@pages': path.resolve(__dirname, '../src/pages/'),
      '@static': path.resolve(__dirname, '../src/static/'),
      '@utils': path.resolve(__dirname, '../src/utils/'),
      '@styles': path.resolve(__dirname, '../src/styles/'),
      '@service': path.resolve(__dirname, '../src/service/'),
      '@constant': path.resolve(__dirname, '../src/constant/'),
      '@components': path.resolve(__dirname, '../src/components/'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      title: 'ROARINGWILD SS22',
    }),
  ],
};
