import "./global.css"
import { ThemeProvider, createMuiTheme } from "@material-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Chat } from "./pages"
import { Profile } from "./components"
/* import { Profile } from './profile'; */

const theme = createMuiTheme({})

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/profile" component={(props) => <Profile {...props} />} />
        <Route path="/chat" component={(props) => <Chat {...props} />} />
        <Route path="*" component={() => <h1>404</h1>} />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root"),
)
