import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { ContextGlobal } from './utils/global.context';
import { routes } from "./utils/routes";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { changeTheme } = useContext(ContextGlobal);

  return (
    <nav>
      <nav>
        <Link to={routes.home}>
          <h4>Home</h4>
        </Link>
        <Link to={routes.contact}>
          <h4>Contact</h4>
        </Link>
      </nav>
      <button onClick={changeTheme}>
        Change theme
      </button>
    </nav>
  );
};

export default Navbar