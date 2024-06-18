const router = require('express').Router()

/* router.use('/quizz', require('../../../After/routes/quizz.router'))
router.use('/experience', require('../../../After/routes/experience.router'))
router.use('/result'), require('../../../After/routes/result.router')
router.use('/destination'), require('../../../After/routes/destination.router') */

router.use('/user', require('./user.router'))


module.exports = router
