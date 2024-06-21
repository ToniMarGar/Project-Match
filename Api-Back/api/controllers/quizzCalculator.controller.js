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

    // Objeto vacío para resultados
    const quizResults = {
        destinos: [],
        points: 0
    };

    // Función para calcular semejanza
    function calculateSimilarity(userPreferences, city) { // Aqui se filtran los resultados dependiendo de las respuestas
    if (userPreferences.travelers === city.travelers) {
        points += 1;
    }
    if (userPreferences.type === city.type) {
        points += 1;
    }
    if (userPreferences.weather === city.weather) {
        points += 1;
    }
    if (userPreferences.location === city.location) {
        points += 1;
    }
    if (userPreferences.continent === city.continent) {
        points += 1;
    }
    if (userPreferences.experience === city.experience) {
        points += 1;
    }
    return points;
    }

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


// SEGUNDA TAREA
    // 2.1. Iterar sobre cada cityName del objeto Quiz usando map
    Object.keys(userPreferences.Quizz).map((cityName) => {
        // 2.2. Filtrar los destinos coincidentes dentro del map
        cities.filter((cities) => {
            if (cities[cityName] === userPreferences.Quizz[cityName]) {
                // 2.3 Verificar existencia del destino en el objeto DestinoPuntos
                //if (!destinoPuntos[cities.name]) {
                    // 2.4. Si el destino no existe en DestinoPuntos, agregarlo y asignarle una puntuación inicial
                  //  destinoPuntos[cities.name] = 1;
                //} else {
                    // 2.5. Si el destino ya existe, simplemente sumar la puntuación a la ya existente
                  //  destinoPuntos[cities.name] += 1;
                }
            }
        });
    });

// Convertir objeto DestinoPuntos en array y ordenar por puntuación
const sortedDestinos = Object.keys(destinoPuntos)
    .map((name) => ({ name, similarity: destinoPuntos[name] }))
    .sort((a, b) => b.similarity - a.similarity);

// Top 5 recomendaciones
const recommendedCities = sortedDestinos.slice(0, 5).map(item => item.name);


    // Guardar los resultados del quiz en la tabla Quiz
    quizController.saveQuizResults(userId, quizResults)
        .then(() => {
            res.json(recommendedCities);
        })
        .catch((error) => {
            res.status(500).json({ error: "Error al guardar los resultados del quiz." });
        });
});

res.json(recommendedCities);

app.listen(port, () => {
    console.log("Running calculator");
});