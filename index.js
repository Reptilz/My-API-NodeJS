//Call du framework express
const express = require("express");
const app = express();
require("./models/dbConfig"); //import de la db
const postsController = require("./controllers/postsController"); //import du controller posts
const bodyParser = require("body-parser");
const cors = require("cors"); //Permet de communiquer avec l'API créée

//middlewares
app.use(bodyParser.json()); //permet que req et doc soit lisible en json
app.use(cors()); //Donne l'accès à l'API pour les utilisateurs
app.use("/posts", postsController);

//callback si le serveur est lancé, affiché un message dans la console.
app.listen(5500, () => console.log("Server listening on: 5500"));
