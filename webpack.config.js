const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'api.bundle.js',
  },
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  plugins: [
    new CopyPlugin([
          { 
            from: path.join(__dirname, 'index.html'), 
            to: path.join(__dirname, 'dist'),
            toType: "dir",
          }
        ]
    ),
  ]
};