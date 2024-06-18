const router = require('express').Router()

const {
    getAllExperiences,
    getOneExperience,
    createExperience,
    updateExperience,
    deleteExperience
} = require('../controllers/experience.controller')

router.get('/getAllExperiences', getAllExperiences)
router.get('/hyyhyh', getOneExperience)
router.post('/newExperience', createExperience)
router.put('/hyhyh', updateExperience)
router.delete('/hyhyhyhyh', deleteExperience)

module.exports = router