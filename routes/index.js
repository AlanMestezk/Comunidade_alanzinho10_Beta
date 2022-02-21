var express = require('express');
var router = express.Router();
const controller = require("../controller/controller")

/* GET home page. */

router.get('/loginefetuado', controller.loginefetuado)
router.get('/cadastrofeito', controller.cadastrofeito)
router.get('/confirmarcontato', controller.confirmarcontato)
router.get('/contato', controller.contato)
router.get('/login', controller.login)
router.get('/cadastro', controller.cadastro)
router.get("/",controller.textoHome )


module.exports = router;
