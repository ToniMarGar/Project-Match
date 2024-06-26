const ContactInfo = require("../models/contactInfo.model")

async function getOneContactInfo(req, res) {
  try {
    const contactInfo = await ContactInfo.findByPk(req.params.id)
    if (contactInfo) {
      return res.status(200).json(contactInfo)
    } else {
      return res.status(404).send('Contact information not found')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function getAllContactInfos(req, res) {
  try {
    const contactInfo = await ContactInfo.findAll({ paranoid: false })
    if (contactInfo) {
      return res.status(200).json(contactInfo)
    } else {
      return res.status(404).send('No contact information found')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function createContactInfo(req, res) {
    try {
        const contactInfo = await ContactInfo.create({
          name: req.body.name,
          surname: req.body.surname,
          username: req.body.username,
          email: req.body.email,
          password: req.body.password

// En caso de IceBox, se añadirian los elementos de: telf, card, DNI
        })
        return res.status(200).json({message: 'Contact information created', contactInfo: contactInfo})
    } catch (error) {
        //res.status(500).send(error.message)
        console.log(error)
    }
}

async function updateContactInfo(req, res) {
  try {
    const [contactInfoExist, contactInfo] = await ContactInfo.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    })
    if (contactInfoExist !== 0) {
      return res.status(200).json({ message: 'ContactInfo updated', contactInfo: contactInfo })
    } else {
      return res.status(404).send('Contact information not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteContactInfo(req, res) {
  try {
    const contactInfo = await ContactInfo.destroy({
      where: {
        id: req.params.id,
      },
    })
    if (contactInfo) {
      return res.status(200).json('Contact information deleted')
    } else {
      return res.status(404).send('Contact information not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

  /* async function setProfileImage(req, res) {
    try {
        const contactInfo = await ContactInfo.create({
          profilepic: req.body.profilepic,

        })
        return res.status(200).json({message: 'Profile picture added', contactInfo: contactInfo})
    } catch (error) {
        res.status(500).send(error.message)
    }
} */

module.exports = {
    getAllContactInfos,
    getOneContactInfo,
    createContactInfo,
    updateContactInfo,
    deleteContactInfo,
    //setProfileImage
}