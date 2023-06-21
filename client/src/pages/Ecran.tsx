import React, { FC, useState }  from "react";
import { Pojo } from "../utils/Generic";

type EcranProps = {};

const Ecran: FC <EcranProps> = props => {
    const [historique, setHistorique] = useState<Pojo[]>([]);

    const handleClick = async () => {
        const data = await window.fetch("/historique");
        const json = await data.json();
        const msg = json.msg;
    
        setHistorique(json);
        console.log(json);
      };

    return(
        <div>
        <h1>Écran</h1>
        <button onClick={handleClick}> Salut </button>
        <div className="card container">
        {historique.map((item, index) => (
          <div className="row" key={index}>
            {Object.keys(item as any).map((key, index) => (
                <div className= "col-sm" style={{display: "grid"}}>
                        <span>{key} </span>    
                        <span>{item[key]}</span>    
                </div>     
            ))}
          </div>
        ))}
        </div>
      </div>
    );
};

export default Ecran;