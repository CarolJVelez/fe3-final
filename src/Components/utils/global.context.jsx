import { createContext,  useContext, useEffect, useState } from "react";
import axios from "axios";
export const initialState = { theme: "light", data: []}

export const ContextGlobal = createContext(undefined);

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState(initialState.theme);
  const [chars, setChars] = useState([]);
  const [favs, setFavs] = useState(lsFavs);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setChars(res.data.results);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  const changeTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = (prevTheme === "light" ? "dark" : "light");
      return newTheme;
    });
  };

  return (
    <ContextGlobal.Provider value={{ theme, changeTheme, chars, favs, setFavs}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useCharStates = () => useContext(ContextGlobal);