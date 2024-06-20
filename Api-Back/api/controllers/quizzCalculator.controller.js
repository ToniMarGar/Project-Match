const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cityDB = require('../../database/cities.json')
const Quizz = require("../models/quizz.model")

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Cargar datos de las ciudades
const cities = JSON.parse(fs.readFileSync(cityDB, 'utf8'));

// Función para calcular semejanza
function calculateSimilarity(userPreferences, city) {
    let similarity = 0;
    if (userPreferences.Quizz.weather === city.weather) {
        similarity += 1;
    }
    if (userPreferences.location === city.location) {
        similarity += 1;
    }
    if (userPreferences.continent === city.continent) {
        similarity += 1;
    }
    if (userPreferences.travelers === city.travelers) {
        similarity += 1;
    }
    return similarity;
}

// Endpoint para obtener recomendaciones
app.post('/recommend', (req, res) => {
    const userPreferences = req.body;
    const similarities = [];

    for (const city of cities) {
        const similarity = calculateSimilarity(userPreferences, city);
        similarities.push({ similarity, name: city.name });
    }

    similarities.sort((a, b) => b.similarity - a.similarity);
    const recommendedCities = similarities.slice(0, 3).map(item => item.name); // Top 3 recomendaciones

    res.json(recommendedCities);
});

app.listen(port, () => {
    console.log("Running calculator");
});
