const path = require('path');

module.exports = {
  entry: './index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
  },

  resolveLoader: {
    alias: {
      'my-to-string-loader': path.resolve(__dirname, 'my-to-string-loader'),
    },
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {loader: 'handlebars-loader'},
          {loader: 'my-to-string-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'},
        ],
      },
    ],
  },
};
