var webpack = require("webpack")

module.exports = {
   entry: './js/main.js',
   output: {
      path: __dirname + '/dest',
      filename: 'app.js'
   },
   module: {
      loaders: [
         { test: /\.tag$/, exclude: /node_modules/, loader: 'tag', query:{ template: 'jade' }}
      ]
   }
}
