const router = require('express').Router()

const {
    getAllContactInfos,
    getOneContactInfo,
    createContactInfo,
    updateContactInfo,
    deleteContactInfo,
    
    //setProfileImage

} = require('../controllers/contactInfo.controller')

router.get('/:id', getOneContactInfo)
router.get('/', getAllContactInfos)
router.post('/', createContactInfo)
router.put('/:id', updateContactInfo)
router.delete('/:id', deleteContactInfo)

//router.post('/:id', setProfileImage)

module.exports = router