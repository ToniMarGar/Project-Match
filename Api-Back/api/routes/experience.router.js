const router = require('express').Router()

const {
    getAllExperiences,
    getOneExperience,
    createExperience,
    updateExperience,
    deleteExperience
} = require('../controllers/experience.controller')

router.get('/:id', getOneExperience)
router.get('/', getAllExperiences)
router.post('/', createExperience)
router.put('/:id', updateExperience)
router.delete('/:id', deleteExperience)

module.exports = router