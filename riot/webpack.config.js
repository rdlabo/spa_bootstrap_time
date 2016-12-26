var webpack = require("webpack")

module.exports = {
   entry: './js/main.js',
   output: {
      path: __dirname + '/dest',
      filename: 'app.js'
   },
   devServer: {
      inline: true,
      hot: true
   },
   module: {
      loaders: [
         { test: /\.tag$/, exclude: /node_modules/, loader: 'tag-pug-loader' }
      ]
   }
}
