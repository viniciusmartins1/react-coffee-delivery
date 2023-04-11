import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { createContext } from "react";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Router";
import { ScrollToTop } from "./components/ScrollToTop";


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ScrollToTop />
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
