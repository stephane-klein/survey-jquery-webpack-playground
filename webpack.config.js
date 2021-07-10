const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist/'),
  },
  devServer: {
    contentBase: path.join(process.cwd(), 'dist'),
    port: 8080,
    stats: {
      children: false
    }
  }
};