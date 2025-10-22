import {CssBaseline, ThemeProvider} from "@mui/material";
import Home from "./pages/Home";
import darkTheme from "./theme";
import AOS from 'aos'
import {useEffect} from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 0,
    })
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Home/>
    </ThemeProvider>
  );
}

export default App;
