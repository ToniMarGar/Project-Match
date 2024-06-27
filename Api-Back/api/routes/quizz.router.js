const router = require('express').Router()

const {
    getOneQuizz,
    getAllQuizz,
    createQuizz,
    updateQuizz,
    deleteQuizz,
    suggestedDestinations
} = require('../controllers/quizz.controller')
const {checkAuth} = require("../middleware/index")

router.get('/:id', getOneQuizz)
router.get('/', checkAuth, getAllQuizz)
router.post('/', checkAuth, createQuizz)
router.put('/:id', updateQuizz)
router.delete('/:id', deleteQuizz)


router.post('/suggestedDestinations', suggestedDestinations)

module.exports = router