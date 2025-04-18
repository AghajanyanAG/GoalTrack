import { Theme } from "theme-ui";

export const theme: Theme = {
  //Fonts
  fonts: {
    body: "Open Sans, sans-serif",
    heading: "Open Sans, sans-serif",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48],
  space: [0, 4, 8, 16, 32],

  //Colors
  colors: {
    primary: "#1b1b1b",
    secondary: "#fff",
    backgroundLight: "#e6e6e6",
    backgroundDark: "#000000",
    textLight: "#0d0d0d",
    textDark: "#f2f2f2",
    border: "#02a302",
    lightGray: "#454545",
  },

  //Text
  text: {
    headingDark: {
      fontFamily: "heading",
      fontSize: [2, 3, 4],
      fontWeight: "bold",
      color: "textDark",
      lineHeight: "heading",
    },
    primary: {
      fontSize: 3,
      color: "textDark",
    },
  },

  //Buttons
  buttons: {
    filtered: {
      bg: "lightGray",
      borderRadius: 20,
      border: "none",
      color: "textDark",
      fontSize: 2,
      textAlign: "center",
      transition: "0.3s",
      "&:hover": {
        cursor: "pointer",
        textDecoration: "underline",
      },
    },
  },
  // Styles
  styles: {
    root: {
      fontFamily: "body",
    },
    a: {
      color: "textDark",
      fontSize: 3,
      fontWeight: "bold",
      textDecoration: "none",
      "&:hover": {
        cursor: "pointer",
        textDecoration: "underline",
      },
    },
    h1: {
      variant: "text.headingDark",
    },
  },
};
