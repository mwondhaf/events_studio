import ServicesList from "./pages/services/ServicesList"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Admin from "./pages/admin/Admin"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4db1c9",
      main: "#219ebc",
      dark: "#176e83",
      contrastText: "#fff"
    }
  },
  typography: {
    fontFamily: "Cabin",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/services">
                <ServicesList />
              </Route>
              <Route exact path="/admin">
                <Admin />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App
