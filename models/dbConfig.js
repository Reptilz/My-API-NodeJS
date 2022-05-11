//mongoose permet de communiquer avec la db mango
const mongoose = require("mongoose");

//Connexion à la db
mongoose.connect(
  "mongodb://localhost:27017/node-api",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("MongoDB connected!");
    else console.log("Connection Error: " + err);
  }
);
