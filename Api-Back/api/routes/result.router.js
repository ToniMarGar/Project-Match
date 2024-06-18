const router = require('express').Router()

const {
    getOneResult,
    getAllResults,
    createResult,
    updateResult,
    deleteResult,
} = require('../controllers/result.controller')

router.get('/:id', getOneResult)
router.get('/', getAllResults)
router.post('/', createResult)
router.put('/:id', updateResult)
router.delete('/:id', deleteResult)

module.exports = router