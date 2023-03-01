const express = require('express');
const router = express.Router();
const PessoaController = require('../controllers/PessoaController')





router.get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)
router.get('/pessoas/todos', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.get('/pessoas', PessoaController.pegaTodasAsPessoasAtivas)
router.post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criarMatricula)
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
router.post('/pessoas', PessoaController.criaPessoa)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizarMatricula)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagarMatricula)
router.delete('/pessoas/:id', PessoaController.apagaPessoa)


module.exports = router;