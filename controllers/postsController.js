const express = require("express");
const router = express.Router();
const ObjectID = require("mongoose").Types.ObjectId; //Récupère l'id de l'object

//va chercher le modèle Posts
const { PostsModel } = require("../models/postsModel");

//Affiche les posts
router.get("/", (req, res) => {
  PostsModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  });
});

//Création d'un post
router.post("/", (req, res) => {
  const newRecord = new PostsModel({
    author: req.body.author,
    message: req.body.message,
  });
  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error creating data: " + err);
  });
});

//Modification d'un post
router.put("/:id", (req, res) => {
  //si objectID n'existe pas alors return une erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow: " + req.params.id);

  const updateRecord = {
    author: req.body.author,
    message: req.body.message,
  };

  PostsModel.findByIdAndUpdate(
    //params
    req.params.id,
    { $set: updateRecord },
    { new: true },
    //callback
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update Error: " + err);
    }
  );
});

//Suppression d'un post
router.delete("/:id", (req, res) => {
  //si objectID n'existe pas alors return une erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow: " + req.params.id);

  PostsModel.findByIdAndDelete(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Delete Error: " + err);
  });
});
module.exports = router;
