const router = require('express').Router()

const {
    getAllDestinations,
    getOneDestination,
    createDestination,
    updateDestination,
    deleteDestination
} = require('../controllers/destination.controller')

router.get('/tgtgt', getAllDestinations)
router.get('/idggr', getOneDestination)
router.post('/grgrgr', createDestination)
router.put('/grgrgr', updateDestination)
router.delete('/grgrgrgrgrg', deleteDestination)

module.exports = router