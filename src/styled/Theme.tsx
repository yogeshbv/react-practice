import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryColor: "#fa8220",
    altColor: "#fdd9bc"
  },
  fontSizes: {
    fontSmall: "0.8rem",
    fontBase: "1em",
    font200: "1.2em",
    font300: "1.4em",
    font400: "1.6em",
    font500: "1.8em",
    font600: "2em",
  }
};

interface ThemeProps {
    children: any,
}

const Theme = ({ children }: ThemeProps ) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
