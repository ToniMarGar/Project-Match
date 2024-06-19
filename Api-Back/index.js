const { checkConnection, syncModels } = require("./database/index")
const {addRelationsToModels} = require("./database/models")
const cors = require('cors')
const express = require("express"); //Importamos express
const morgan = require("morgan"); //Importamos morgan para obtener información de nuestras peticiones
const port = 3000; //Definimos una variable con el puerto que queremos usar con express
const initializeRelations = require('./database/relations.js')

const checkAndSync = async () => {
    await checkConnection();
    initializeRelations()
    addRelationsToModels()
    await syncModels();
  };
  
  const initializeAndListen = () => {
    try {
      express()
      .use(cors())
      .use(morgan("dev")) //Configuramos morgan para la información de nuestras peticiones
      .use(express.json()) // Le decimos a express que nos transforme los datos con json
      .use("/api", require("./api/routes/index")) //Le decimos a express que use el router principal
      .listen(port, () => {
        console.log(`> Listening on port: ${port}`); //Levantamos express en el puerto deseado
      });
    } catch (error) {
      console.log(error)
    }
  };
  
  const startAPI = async () => {
    await checkAndSync(); // llamamos a la función que se encarga de manejar la conexión a la base de datos y la sincronización de modelos
    initializeAndListen(); // llamamos a la función que configura express y levanta el servidor
  };
  
  startAPI(); //Llamamos a la función de startAPI