let express = require('express')
let bodyParser = require('body-parser')

let routes = require('./routes')

let app = express()

app.use(express.static('public'))

app.set('view engine', 'hbs')
app.set('views', 'vistas')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use('/', routes)

app.listen(3000, () => console.log('Example app listening on port 3000'))
