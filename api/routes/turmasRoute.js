const express = require('express');
const router = express.Router();
const TurmaController = require('../controllers/TurmaController')



router.get('/turmas', TurmaController.pegaTodasAsTurmas)
router.get('/turmas/:id', TurmaController.pegaUmaTurma)
router.post('/turmas', TurmaController.criaTurma)
router.put('/turmas/:id', TurmaController.atualizaTurma)
router.delete('/turmas/:id', TurmaController.apagaTurma)



module.exports = router;