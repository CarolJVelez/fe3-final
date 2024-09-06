import { createContext, useState } from "react";

export const initialState = { theme: "light", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState(initialState.theme);

  const changeTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = (prevTheme === "light" ? "dark" : "light");
      return newTheme;
    });
  };

  return (
    <ContextGlobal.Provider value={{ theme, changeTheme }}>
      {children}
    </ContextGlobal.Provider>
  );
};
