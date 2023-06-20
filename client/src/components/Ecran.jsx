import React, { useEffect, useState } from "react";
import axios from "axios";

function Ecran() {
  const [historique, setHistorique] = useState([]);

  // useEffect(() => {
  //   fetch('/ecran')
  //     .then((response) => response.json())
  //     .then((data) => setUsers(data))
  //     .catch((error) => console.error('Erreur lors de la récupération des utilisateurs :', error));
  //   }, []);
  const handleClick = async () => {
    const data = await window.fetch("/historique");
    const json = await data.json();
    const msg = json.msg;

    setHistorique(json);
    console.log(json);
  };

  return (
    <div>
      <h1>Écran</h1>
      <button onClick={handleClick}> Bonjour </button>
      {historique.map((item, index) => (
        <p>
          <span key={index}>({JSON.stringify(item.adresse_ip)})</span>
        </p>
      ))}
    </div>
  );
}

export default Ecran;
