const { checkAuth,checkAdmin } = require("../middleware/index.js");
const {
    getOneDestination,
    getAllDestinations,
    createDestination,
    updateDestination,
    deleteDestination
} = require('../controllers/destination.controller.js')

const router = require('express').Router()

router.get('/:id',checkAuth, getOneDestination)
router.get('/',checkAuth, getAllDestinations)
router.post('/',checkAuth, createDestination)
router.put('/:id',checkAuth, updateDestination)
router.delete('/:id',checkAuth, deleteDestination)

module.exports = router