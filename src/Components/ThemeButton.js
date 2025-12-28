import React from "react";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";

export default function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <>
      <button onClick={handleTheme}>
        Current Theme IS {theme} Change Color Here..
      </button>
    </>
  );
}
