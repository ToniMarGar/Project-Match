const router = require('express').Router()


router.use('/quizz', require('./quizz.router'))
router.use('/experience', require('./experience.router'))
router.use('/result'), require('./result.router')
router.use('/user'), require('./user.router')

module.exports = router
