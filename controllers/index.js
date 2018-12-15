
let UserModel = require('../models/user')

async function lista (req, res) {
  let users = await UserModel.find().exec()
  console.log(users)
  res.render('lista', { users })
}

async function registro (req, res) {
  res.render('registro')
}

async function perfil (req, res) {
  console.log(req.params.nick)
  let user = await UserModel.find({ nick: req.params.nick }).exec()
  console.log(user)
  res.render('perfil', { user: user[0] })
}

async function create (req, res) {
  console.log(req.body)
  let newUser = new UserModel(req.body)
  newUser.save(function (err, user) {
    if (err) console.log(err)
    res.redirect('/')
  })
}

module.exports = {
  lista,
  registro,
  perfil,
  create
}
