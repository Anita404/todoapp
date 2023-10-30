import React, { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";

export const lightTheme = {
  bgColor: "white",
  containerColor: "white",
  brdColor: "##E3E4F1",
  txtColor: "#494C6B",
  boxShadow: "0px 35px 50px -15px rgba(194, 195, 214, 0.50)",
};

export const darkTheme = {
  bgColor: "#171823",
  containerColor: "#25273D",
  brdColor: "#393A4B",
  txtColor: "#C8CBE7",
  boxShadow: "0px 35px 50px -15px rgba(0, 0, 0, 0.50)",
};

export const ThemeContext = createContext();

const Theme = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    theme === "light" ? setTheme("dark") : setTheme("light");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Theme;
