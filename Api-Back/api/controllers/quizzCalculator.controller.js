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

    // Iterar sobre cada campo del objeto Quiz usando map
    Object.keys(userPreferences.Quizz).map((campo) => {
        // Filtrar los destinos coincidentes dentro del map
        cities.filter((city) => {
            if (city[campo] === userPreferences.Quizz[campo]) {
                // Verificar existencia del destino en el objeto DestinoPuntos
                if (!destinoPuntos[city.name]) {
                    // Si el destino no existe en DestinoPuntos, agregarlo y asignarle una puntuación inicial
                    destinoPuntos[city.name] = 1;
                } else {
                    // Si el destino ya existe, simplemente sumar la puntuación a la ya existente
                    destinoPuntos[city.name] += 1;
                }
            }
        });
    });

// Convertir objeto DestinoPuntos en array y ordenar por puntuación
const sortedDestinos = Object.keys(destinoPuntos)
.map((name) => ({ name, similarity: destinoPuntos[name] }))
.sort((a, b) => b.similarity - a.similarity);

// Top 3 recomendaciones
const recommendedCities = sortedDestinos.slice(0, 3).map(item => item.name);

res.json(recommendedCities);
});

app.listen(port, () => {
    console.log("Running calculator");
});