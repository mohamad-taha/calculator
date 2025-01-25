import React, { useState } from "react";
import Calculator from "./components/Calculator";
import { FirstTheme, SecondTheme, ThirdTheme } from "./theme/CalcTheme";
import "./App.css";
import { Box, CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";

const App = () => {
  const [theme, setTheme] = useState(FirstTheme);

  const styles = (
    <GlobalStyles
      styles={{
        body: {
          backgroundColor: "red",
          backgroundColor:
            theme == SecondTheme
              ? "#3b4664"
              : theme == ThirdTheme
              ? "#17062a"
              : "#e6e6e6",
        },
      }}
    />
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {styles}
      <Box>
        <Calculator theme={theme} setTheme={setTheme} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
