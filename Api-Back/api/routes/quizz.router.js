const router = require('express').Router()

const {
    getAllQuizz,
    getOneQuizz,
    createQuizz,
    updateQuizz,
    deleteQuizz
} = require('../controllers/quizz.controller')

router.get('/', getAllQuizz)
router.get('/:id', getOneQuizz)
router.post('/', createQuizz)
router.put('/:id', updateQuizz)
router.delete('/:id', deleteQuizz)

module.exports = router