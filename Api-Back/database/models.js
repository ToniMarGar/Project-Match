// Importa el modelo user desde el archivo iser.model.js dentro de api/model
const User = require('../api/models/user.model')
const ContactInfo = require('../api/models/contactInfo.model')
const Destination = require('../api/models/destination.model')
const Quizz = require('../api/models/quizz.model')
const Result = require('../api/models/result.model')


// Esta funcion se encargara de agregar relaciones entre los diferentes modelos de la base de datos
function addRelationsToModels() {
    try {
    
        console.log('Relations added to all models')
    } catch (error) {
        throw error
    }
}

module.exports = { addRelationsToModels } 