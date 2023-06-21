const mysql = require("mysql2");

// connexion à la bdd mysql
const connection = 
      mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "projet_egis",
    });

  // Gestion des erreurs connexion bdd
  connection.connect((error) => {
    // En cas d'erreur de connexion à la BDD mysql
    if (error) {
      console.error("Erreur de connexion à la base de données mysql");
      return;
    }
    // Si connexion réussie
    console.log("Connexion à la base de données Mysql: OK");
  });

  module.exports = connection;

