import React from "react";
import { Link } from "react-router-dom";
import { routes } from "./utils/routes";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        <img style={{width:"200px"}} src="../../public/images/doctor.jpg" alt="dentista" />
        <Link to={routes.detail + id}>
        <h3>{name}</h3>
        </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <p>{username}</p>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
