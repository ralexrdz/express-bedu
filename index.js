let express = require('express')

let app = express()

app.use(express.static('public'))

app.set('view engine', 'hbs')
app.set('views', 'vistas')

app.use(validaDatos)

app.get('/hola/:id', (req, res, next) => {
  console.log(req.variablePrueba)
  if (req.params.id === '0') {
    res.render('hola', {
      title: 'Helooooooou',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, ex?',
      layout: 'layout-admins'
    })
  } else {
    res.render('hola', {
      title: 'Helooooooou',
      posts: [
        {
          author: 'Pepe',
          text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ve'
        },
        {
          author: 'Pepe',
          text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ve'
        },
        {
          author: 'Pepe',
          text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ve'
        },
        {
          author: 'Pepe',
          text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ve'
        }
      ],
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, ex?'
    })
  }
})

app.listen(3000, () => console.log('Example app listening on port 3000'))

function validaDatos (req, res, next) {
  console.log('en validandoDatos', req)

  req.variablePrueba = {
    a: 1,
    b: 2,
    c: {
      d: 3,
      e: 4
    }
  }
  console.log(req.params)
  if (req.params.id === '5') {
    res.send('error')
  } else next()
}
