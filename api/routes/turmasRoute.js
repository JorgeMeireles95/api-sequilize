const express = require('express');
const router = express.Router();
const TurmaController = require('../controllers/TurmaController')



router.get('/turmas', TurmaController.pegaTodasAsTurmas)
router.get('/turmas/:id', TurmaController.pegaUmaTurma)
router.get('/turma/data', TurmaController.pegaTodasAsTurmasPorData)
//colocar a querty string 
//http://localhost:3000/turmas?data_incial=2023-02-221&data_final=2023-01-06
router.post('/turmas', TurmaController.criaTurma)
router.post('/turmas/:id/restaura', TurmaController.restauraTurma)
router.put('/turmas/:id', TurmaController.atualizaTurma)
router.delete('/turmas/:id', TurmaController.apagaTurma)



module.exports = router;