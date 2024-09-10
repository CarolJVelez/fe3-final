import React from "react";
import Card from "../Components/Card";
import { useCharStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favs } = useCharStates();
  return (
    <div className="card-container">
      {favs.map((dentista) => (
        <Card key={dentista.id} dentista={dentista} />
      ))}
    </div>
  );
};

export default Favs;
