const express = require('express');
const router = express.Router();
const PessoaController = require('../controllers/PessoaController')


router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.post('/pessoas', PessoaController.criaPessoa)


module.exports = router;