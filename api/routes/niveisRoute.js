const express = require('express');
const router = express.Router();
const NivelController = require('../controllers/NivelController')


router.get('/niveis', NivelController.pegaTodosOsNiveis)
router.get('/niveis/:id', NivelController.pegaUmNivel)
router.post('/niveis', NivelController.criaNivel)
router.post('/niveis/:id/restaura', NivelController.restauraNivel)
router.put('/niveis/:id', NivelController.atualizaNivel)
router.delete('/niveis/:id', NivelController.apagaNivel)



module.exports = router;