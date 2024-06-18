// Importa el modelo user desde el archivo iser.model.js dentro de api/model
const User = require('../api/models/user.model')

// Esta funcion se encargara de agregar relaciones entre los diferentes modelos de la base de datos
function addRelationsToModels() {
    try {
    
        console.log('Relations added to all models')
    } catch (error) {
        throw error
    }
}

module.exports = { addRelationsToModels } 