import logo from "./logo.svg";
import "./App.css";
import UserContext from "./UserContext";
import ThemeContext from "./ThemeContext";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import ThemeButton from "./Components/ThemeButton";

function App() {
  const user = {
    name: "Abhi",
    email: "email@gmail.com",
    contact_no: "7071310320",
  };

  const [theme, setTheme] = useState("light");

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Navbar />
        <Dashboard />
      </UserContext.Provider>

      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeButton />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
