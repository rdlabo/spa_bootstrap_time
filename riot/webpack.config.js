var webpack = require("webpack")

module.exports = [
   {
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
         rules: [
            {
               test: /\.tag$/,
               enforce: 'pre',
               exclude: /node_modules/,
               use: [
                  {
                     loader: 'riot-tag-loader',
                     options: {
                        template: 'pug',
                        debug: true
                     }
                  }
               ]
            },
            {
               test: /\.js|\.tag$/,
               enforce: 'post',
               exclude: /node_modules/,
               use: ['buble-loader']
            }
         ]
      },
      resolve: {
         extensions: ['.js', '.tag']
      },
      plugins: [
         new webpack.ProvidePlugin({
            riot: 'riot'
         })
      ]
   }
]
