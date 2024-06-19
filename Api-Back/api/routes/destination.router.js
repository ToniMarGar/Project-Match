
const {
    getOneDestination,
    getAllDestinations,
    createDestination,
    updateDestination,
    deleteDestination
} = require('../controllers/destination.controller.js')

const router = require('express').Router()

router.get('/:id', getOneDestination)
router.get('/', getAllDestinations)
router.post('/', createDestination)
router.put('/:id', updateDestination)
router.delete('/:id', deleteDestination)

module.exports = router