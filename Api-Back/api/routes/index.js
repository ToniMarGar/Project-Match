const router = require('express').Router()

router.use('/result'), require('./result.router')
router.use('/quizz', require('./quizz.router'))
router.use('/experience', require('./experience.router'))
router.use('/destination', require('./destination.router')) 
router.use('/user', require('./user.router'))

module.exports = router
