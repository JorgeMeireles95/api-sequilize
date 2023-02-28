const express = require('express');
const router = express.Router();
const PessoaController = require('../controllers/PessoaController')


router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
router.post('/pessoas', PessoaController.criaPessoa)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criarMatricula)
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizarMatricula)
router.delete('/pessoas/:id', PessoaController.apagaPessoa)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagarMatricula)




module.exports = router;