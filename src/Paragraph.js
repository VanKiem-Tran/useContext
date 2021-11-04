import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

function Paragraph() {
  const theme = useContext(ThemeContext);
  return (
    <p className={theme.theme}>
      Welcome to the Next.js documentation! If you're new to Next.js we
      recommend that you start with the learn course. The interactive course
      with quizzes will guide you through everything you need to know to use
      Next.js.
    </p>
  );
}

export default Paragraph;
