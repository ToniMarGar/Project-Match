const router = require('express').Router()


router.use('/quizz', require('./quizz.router'))
router.use('/experience', require('./experience.router'))

module.exports = router
