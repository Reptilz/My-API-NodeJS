const mongoose = require("mongoose");

//config du modèle Posts
const PostsModel = mongoose.model(
  "node-api",
  {
    author: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  "posts"
);

//accessible partout dans l'app
module.exports = { PostsModel };
