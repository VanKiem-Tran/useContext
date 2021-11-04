import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import "./styles.css";
import Content from "./Context";

export default function App() {
  const theme = useContext(ThemeContext);
  return (
    <div className="App">
      <button onClick={theme.toggleTheme}> Toggle </button>
      <Content />
    </div>
  );
}
