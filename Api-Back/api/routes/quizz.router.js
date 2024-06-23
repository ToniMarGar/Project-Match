const router = require('express').Router()

const {
    getOneQuizz,
    getAllQuizz,
    createQuizz,
    updateQuizz,
    deleteQuizz,
    suggestedDestinations
} = require('../controllers/quizz.controller')

router.get('/:id', getOneQuizz)
router.get('/', getAllQuizz)
router.post('/', createQuizz)
router.put('/:id', updateQuizz)
router.delete('/:id', deleteQuizz)


router.post('/suggestedDestinations', suggestedDestinations)

module.exports = router