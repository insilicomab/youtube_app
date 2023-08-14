import { MuiThemeProvider } from "@material-ui/core";
import indigo from "@material-ui/core/colors/indigo";
import createTheme from "@material-ui/core/styles/createTheme";
import "./App.css";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import ApiContextProvider from "./context/ApiContext";

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
    <ApiContextProvider>
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <Main />
      </MuiThemeProvider>
    </ApiContextProvider>
  );
}

export default App;
