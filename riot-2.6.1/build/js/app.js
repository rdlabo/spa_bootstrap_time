var path    = require('path'),
    express = require('express'),
    config  = require('./config');
var app = express();

app.set('views', config.views);
app.set('view engine', 'jade')
app.use('/js', express.static(config.js))
app.use('/dest', express.static(config.tag))

app.get('/', (req, res) => {
   res.render('index', {})
   res.end('Server connected')
})

app.listen(config.port, (err) => {
   if (err) {
      console.log(err)
      return
   }
   console.log('Listening at http://localhost:' + config.port + '\n')
})
