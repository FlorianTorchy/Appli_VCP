const express = require("express");
const connection = require("../config/mysql");
const router = express.Router();

router.get('/', (req, res) => {
    const queryy = `SELECT * from historique_remontee WHERE numero_serie_ecran = "3CQ0021G8H"`; // Remplacez "votre_table" par le nom de votre table
  
    connection.query(queryy, (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération des informations:', err);
        res.status(500).json({ error: 'Erreur lors de la récupération des informations' });
      } else {
        res.json(results);
        console.log(results)
      }
    });
  });
  

module.exports = router;
