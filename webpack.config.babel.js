import path from 'path';

module.exports = {
  entry: 
      path.resolve(__dirname,'src/index.jsx')
    ,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
      rules: [
          {
              test: /\.jsx$/,
              use: 'babel-loader',
              include: path.resolve(__dirname, 'src'),
              exclude: path.resolve(__dirname, 'node_modules')
          }
      ]
  }
};
