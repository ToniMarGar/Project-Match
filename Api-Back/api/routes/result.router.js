const router = require('express').Router()
const { checkAuth,checkAdmin } = require("../middleware/index.js");
const {
    getOneResult,
    getAllResults,
    createResult,
    updateResult,
    deleteResult
} = require('../controllers/result.controller')

router.get('/:id', checkAuth,getOneResult)
router.get('/', checkAuth,getAllResults)
router.post('/', checkAuth,createResult)
router.put('/:id',checkAuth, updateResult)
router.delete('/:id',checkAuth, deleteResult)

module.exports = router