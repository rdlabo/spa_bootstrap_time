var webpack = require("webpack")

module.exports = {
   entry: './js/main.js',
   output: {
      path: __dirname + '/dest',
      filename: 'app.js'
   },
   module: {
      loaders: [
         { test: /\.tag$/, loader: 'tag', query:{ template: 'jade' }}
      ]
   }
}
