"use strict";
 
module.exports = {
  entry: './main.js',
  output: { path: __dirname, filename: 'bundle.js' },
 
  module: {
    rules: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};