const router = require('express').Router()

const {
    getAllExperiences,
    getOneExperience,
    createExperience,
    updateExperience,
    deleteExperience
} = require('../controllers/experience.controller')

router.get('/', getAllExperiences)
router.get('/:id', getOneExperience)
router.post('/', createExperience)
router.put('/:id', updateExperience)
router.delete('/:id', deleteExperience)

module.exports = router