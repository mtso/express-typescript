const path = require('path')
const fs = require('fs')
const nodeExternals = require('webpack-node-externals')
const appRoot = require('app-root-path').path

const mainFilename = JSON.parse(
  fs.readFileSync(path.resolve(appRoot, 'package.json')).toString()
).main

if (!mainFilename) {
  throw new Error('Missing "main" entry filepath in package.json')
}

// Strip extension
const mainName = mainFilename.replace(/\.[^/.]+$/, '')

module.exports = {
  target: 'node',
  mode: 'development',
  entry: {
    [mainName]: path.resolve(__dirname, mainFilename),
  },
  externals: [
    nodeExternals(),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: "commonjs",
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
}
