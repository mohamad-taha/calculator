import {
  Box,
  Button,
  ButtonGroup,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FirstTheme, SecondTheme, ThirdTheme } from "../theme/CalcTheme";
import "./Calculator.css";
const Calculator = ({ theme, setTheme }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      const keyValue = event.key;

      if (
        (keyValue >= "0" && keyValue <= "9") ||
        keyValue === "+" ||
        keyValue === "-" ||
        keyValue === "*" ||
        keyValue === "/" ||
        keyValue === "."
      ) {
        setInputValue(inputValue + keyValue);
      } else if (keyValue === "=" || keyValue === "Enter") {
        try {
          const result = eval(inputValue);
          setInputValue(result.toString());
        } catch (error) {
          setInputValue("error inputs");
        }
      } else if (keyValue === "Backspace") {
        setInputValue(inputValue.slice(0, -1));
      } else if (keyValue === "Escape") {
        setInputValue("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [inputValue]);

  const buttons = [
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "C", value: "DEL" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "+", value: "+" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "-", value: "-" },
    { label: ".", value: "." },
    { label: "0", value: "0" },
    { label: "/", value: "/" },
    { label: "x", value: "*" },
    { label: "RESET", value: "RESET" },
    { label: "=", value: "=" },
  ];

  const handleButtonClick = (value) => {
    switch (value) {
      case "DEL":
        setInputValue(inputValue.slice(0, -1));
        break;
      case "RESET":
        setInputValue("");
        break;
      case "=":
        try {
          const result = eval(inputValue);
          setInputValue(result.toString());
        } catch (error) {
          setInputValue("error inputs");
        }
        break;
      default:
        setInputValue(inputValue + value);
        break;
    }
  };

  return (
    <Box className="calculator">
      <Box>
        <Box className="header">
          <Typography variant="h5">Theme</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ButtonGroup variant="outlined">
              <Button
                onClick={() => setTheme(FirstTheme)}
                size="small"
                aria-label="change to theme 1"
                sx={{ background: theme == FirstTheme ? "#62b5bd" : "" }}
              >
                <Typography>One</Typography>
              </Button>
              <Button
                onClick={() => setTheme(SecondTheme)}
                size="small"
                aria-label="change to theme 2"
                sx={{ background: theme == SecondTheme ? "#62b5bd" : "" }}
              >
                <Typography>Two</Typography>
              </Button>
              <Button
                onClick={() => setTheme(ThirdTheme)}
                size="small"
                sx={{ background: theme == ThirdTheme ? "#62b5bd" : "" }}
                aria-label="change to theme 3"
              >
                <Typography>Three</Typography>
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
        <OutlinedInput
          value={inputValue}
          fullWidth
          readOnly
          sx={{
            height: "100px",
            bgcolor:
              theme == SecondTheme
                ? "#181f32"
                : theme == ThirdTheme
                ? "#1e0836"
                : "white",
            fontSize: "40px",
            color:
              theme == SecondTheme
                ? "white"
                : theme == ThirdTheme
                ? "#f6da44"
                : "black",
          }}
        />
        <Box
          className="calcContainer"
          sx={{
            bgcolor:
              theme == SecondTheme
                ? "#181f32"
                : theme == ThirdTheme
                ? "#1e0836"
                : "white",
          }}
        >
          {buttons.map((button, index) => (
            <Button
              key={index}
              size="large"
              variant="outlined"
              onClick={() => handleButtonClick(button.value)}
              sx={{
                ...(button.value === "DEL" && {
                  bgcolor: "#62b5bd",
                  color: "white",
                  boxShadow: "0 6px 6px  #175d63",
                  "&:hover": {
                    background: "rgb(23, 87, 93)",
                  },
                }),
                ...(button.value === "RESET" && {
                  bgcolor: "#62b5bd",
                  color: "white",
                  boxShadow: "0 6px 6px rgb(23, 93, 99)",
                  width: "45%",
                  "&:hover": {
                    background: "rgb(23, 87, 93)",
                  },
                }),
                ...(button.value === "=" && {
                  bgcolor: "#ff8b38",
                  color: "white",
                  boxShadow: "0 6px 6px  #9f440a",
                  width: "45%",
                  "&:hover": {
                    background: "rgb(210, 108, 35)",
                  },
                }),
              }}
            >
              {button.label}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Calculator;
