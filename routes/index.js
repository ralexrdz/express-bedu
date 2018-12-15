var express = require('express')
var router = express.Router()

var controllers = require('../controllers')

router.get('/', controllers.lista)
router.get('/registro', controllers.registro)
router.get('/perfil/:nick', controllers.perfil)

router.post('/user', controllers.create)

module.exports = router
