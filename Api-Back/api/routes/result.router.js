const router = require('express').Router()

const {
    getAllResults,
    getOneResult,
    createResult,
    updateResult,
    deleteResult,
} = require('../controllers/result.controller')

router.get('/', getAllResults)
router.get('/:id', getOneResult)
router.post('/', createResult)
router.put('/:id', updateResult)
router.delete('/:id', deleteResult)

module.exports = router