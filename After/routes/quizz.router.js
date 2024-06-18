const router = require('express').Router()

const {
    getAllQuizz,
    getOneQuizz,
    createQuizz,
    updateQuizz,
    deleteQuizz
} = require('../controllers/quizz.controller')

router.get('/ssss', getAllQuizz)
router.get('/issssd', getOneQuizz)
router.post('/sssss', createQuizz)
router.put('/idssss', updateQuizz)
router.delete('/idsssss', deleteQuizz)

module.exports = router