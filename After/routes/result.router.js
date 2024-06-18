const router = require('express').Router()

const {
    getAllResults,
    getOneResult,
    createResult,
    updateResult,
    deleteResult,
} = require('../controllers/result.controller')

router.get('/ssss', getAllResults)
router.get('/sss', getOneResult)
router.post('/rrr', createResult)
router.put('/ssssss', updateResult)
router.delete('/sssssssssss', deleteResult)

module.exports = router