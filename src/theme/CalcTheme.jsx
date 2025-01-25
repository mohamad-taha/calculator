import { createTheme } from "@mui/material";

export const FirstTheme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "24px",
          width: "80px",
          background: "#e5e4e0",
          border: "none",
          color: "black",
          fontWeight: "600",
          fontFamily: "changa",
          boxShadow: "0 6px 6px   hsl(28, 16%, 65%)",
          "&:hover": {
            background: "inherit",
          },
          "@media (max-width:639px)": {
            width: "70px",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "changa",
  },
});

export const SecondTheme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "24px",
          width: "80px",
          background: "#e5e4e0",
          border: "none",
          color: "black",
          fontWeight: "600",
          fontFamily: "changa",
          boxShadow: "0 6px 6px   hsl(28, 16%, 65%)",
          "&:hover": {
            background: "inherit",
            color: "white",
          },
          "@media (max-width:639px)": {
            width: "70px",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "changa",
  },
});

export const ThirdTheme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "24px",
          width: "80px",
          background: "#331b4d",
          border: "none",
          color: "#f6da44",
          fontWeight: "600",
          fontFamily: "changa",
          boxShadow: "0 6px 6px   hsl(277, 52.00%, 14.70%)",
          "&:hover": {
            background: "inherit",
          },
          "@media (max-width:639px)": {
            width: "70px",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "changa",
    h5: {
      color: "white",
    },
  },
});
