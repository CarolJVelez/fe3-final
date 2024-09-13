import { createContext,  useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { reducer } from "../../reducer/reducer";

export const ContextGlobal = createContext(undefined);

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

export const ContextProvider = ({ children }) => {
  
  const initialState = {
    theme: "light", 
    chars: [],
    favs: lsFavs,
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      dispatch({type: "GET_CHARS", payload: res.data.results})
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  const changeTheme = () => {
    dispatch({type: "CHANGE_THEME"});
  };

  return (
    <ContextGlobal.Provider value={{state, dispatch, changeTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useCharStates = () => useContext(ContextGlobal);