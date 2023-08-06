import { MuiThemeProvider } from "@material-ui/core";
import "./App.css";

import indigo from "@material-ui/core/colors/indigo";
import createTheme from "@material-ui/core/styles/createTheme";
import NavBar from "./components/NavBar";

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: '"Comic Neue",cursive',
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <NavBar />
    </MuiThemeProvider>
  );
}

export default App;
