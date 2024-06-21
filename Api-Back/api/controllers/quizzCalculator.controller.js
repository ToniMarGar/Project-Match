const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cityDB = require('../../database/cities.json')
const Quizz = require("../models/quizz.model")

const app = express();
const port = 3000;

// Traemos funcion crear para poder esperar al usuario al crear para pillar los resultados
const { createQuizz } = require('./quizz.controller')

// Middleware para parsear JSON
app.use(bodyParser.json());

// Cargar datos de las ciudades
const cities = JSON.parse(fs.readFileSync(cityDB, 'utf8'));

// 1.2. SE GUARDAN LOS RESULTADOS DEL QUIZZ EN LA TABLA QUIZZ => ID del usuario que lo realizo
async function getQuizzResults(req, res) {
try {

const userQuizz = await Quizz.create()

const user = await User.id(user.id) // falta meter el user ID

return res.status(200).json({travelers: userQuizz.travelers, experience: userQuizz.experience, weather: 
userQuizz.weather, location: userQuizz.location, continent: userQuizz.continent})

} catch (error) {
return res.status(500).send(error.message)
}
}

// ==================================================================================

  // Objeto vacío para resultados

  console.log(quizz.dataValues);

  const quizResponses = Object.values(req.body)
  
  const formattedCities = cityDB.map(city => {
    let points = 0
    const cityValues = Object.values(city)

    // Not travellers criteria
    for(response of quizResponses) {
      if (cityValues.includes(response)) points++
    }

    // Travellers criteria

    // City travellers
    const travellersRange = city.travelers.split("-")
    const minTravellers = parseInt(travellersRange[0])
    const maxTravellers = parseInt(travellersRange[1])

    // User choosen travellers (as it comes in body)
    const choosenTravellers = req.body.Qtravellers

    if(choosenTravellers >= minTravellers && choosenTravellers <= maxTravellers) points++

    return {city, points}
  })

  console.log(formattedCities)

  const rankedCitites = formattedCities.sort((a, b) => b.points - a.points)
  console.log(rankedCitites)
  const first3 = rankedCitites.slice(0,3)




// ==================================================================================

// Función para guardar los resultados del quiz
exports.saveQuizResults = (userId, quizResults) => {
    const quiz = new Quizz({
        userId: userId,
        results: quizResults
    });

    return quiz.save();
};

// Endpoint para obtener recomendaciones
app.post('/recommend', (req, res) => {
    const userPreferences = req.body;
    const similarities = [];


// Convertir objeto DestinoPuntos en array y ordenar por puntuación
const sortedDestinos = Object.keys(destinoPuntos)
    .map((name) => ({ name, similarity: destinoPuntos[name] }))
    .sort((a, b) => b.similarity - a.similarity);

    exports.sortedDestinos;
    
    // ======= CREAR UNA FUNCION RANDOM QUE BUSQUE EL ARRAY RESPUESTA ORGANIZADO. DEBE CONTEMPLAR LAS CIUDADES DE MAYOR PUNTUACION EN UNA VARIABLE LLAMADA MOSTPOINT
    // HACER UN RANDOM DE MAYOR A MENOR HASTA TENER 3 CIUDADES EJ; ORDENADOR DE MAYOR A MENOR


/*     // Guardar los resultados del quiz en la tabla Quiz
    quizController.saveQuizResults(userId, quizResults)
        .then(() => {
            res.json(recommendedCities);
        })
        .catch((error) => {
            res.status(500).json({ error: "Error al guardar los resultados del quiz." });
        }); */
});

//res.json(recommendedCities);

app.listen(port, () => {
    console.log("Running calculator");
});

module.exports = getQuizzResults;