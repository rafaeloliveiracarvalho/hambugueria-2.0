import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: "#27AE60",
    primaryLight: "#93D7AF",
    primaryExtraLight: "#27ae6019",
    secondary: "#EB5757",
    feedback: {
      error: "#E60000",
      warning: "#FFCD07",
      success: "#168821",
      information: "#155BCB",
    },
    gray: {
      50: "#F5F5F5",
      100: "#E0E0E0",
      300: "#828282",
      600: "#333333",
    },
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  styles: {
    global: {
      body: {
        bg: "#fff",
        color: "gray.900",
        minHeight: "100vh",
      },
      "div#root": {
        height: "100%",
      },
    },
  },
});
