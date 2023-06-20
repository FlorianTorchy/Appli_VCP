const path = require("path");
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors"); // permet de prendre en charge des requêtes multi-origines sécurisées et des transferts de données entre des navigateurs et des serveurs web
const dotenv = require("dotenv").config(); // Permet d'utiliser les variables d'environnement présentes dans le fichier .env

//middleware cors permet les requêtes depuis le front
app.use(cors());

// middlewares permettant de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve les fichiers statiques du build React
app.use(express.static(path.resolve(__dirname, "../client/build")));

// connexion à la bdd mysql

// Pour chaque requête get, cherche la route dans le fichier get.routes
app.use("/historique", require("./routes/historique.routes"));

// Délivrance du frontend, permet la redirection entre les pages coté frontend
app.get("/*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// Si port déjà défini dans .env alors elle prend sa valeur, sinon, elle est égale à 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT} http://localhost:${PORT}`);
});
