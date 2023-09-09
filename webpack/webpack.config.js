const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');

const envFilePath = process.env.NODE_ENV 
    ? path.resolve(__dirname, `../environments/.env.${process.env.NODE_ENV}`) 
    : path.resolve(__dirname, `../environments/.env`) 

module.exports = {
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'api.bundle.js',
  },
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  plugins: [
    new CopyPlugin([
          { 
            from: path.join(__dirname, '../index.html'), 
            to: path.join(__dirname, '../dist'),
            toType: "dir",
          }
        ]
    ),
    new Dotenv({
      path: envFilePath
    })
  ]
};