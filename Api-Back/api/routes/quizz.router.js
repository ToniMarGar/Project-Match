const router = require('express').Router()

const {
    getOneQuizz,
    getAllQuizz,
    createQuizz,
    updateQuizz,
    deleteQuizz
} = require('../controllers/quizz.controller')

router.get('/:id', getOneQuizz)
router.get('/', getAllQuizz)
router.post('/', createQuizz)
router.put('/:id', updateQuizz)
router.delete('/:id', deleteQuizz)

module.exports = router