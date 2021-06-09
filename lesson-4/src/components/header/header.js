import React, { Component } from "react"
import styles from "./header.module.css"
import { Switch, Route, Link } from "react-router-dom"
import { Profile } from './Profile';

export class Header extends Component {
  render() {
    return (
      <div className={styles.header}><h1>massanger</h1>
        <Link to="/profile"><p>Profile</p></Link>
        <Switch>
          <Route exact path="/profile" render={Profile} />
        </Switch>
      </div>
    )
  }
}
