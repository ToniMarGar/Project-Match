const User = require('../api/models/user.model')
const ContactInfo = require('../api/models/contactInfo.model')
const Destination = require('../api/models/destination.model')
const Quizz = require('../api/models/quizz.model')
const Result = require('../api/models/result.model')

const initializeRelations = () => {
  try {

    User.hasOne(ContactInfo)
    ContactInfo.belongsTo(User)

    // One to Many
    Quizz.hasMany(Result)
    Result.belongsTo(Quizz)

    Destination.hasMany(Result)
    Result.belongsTo(Destination)

    User.hasMany(Result)
    Result.belongsTo(User)

    console.log('Relations added to models')

  } catch (error) {
    console.log(error)
  }
}

module.exports = initializeRelations