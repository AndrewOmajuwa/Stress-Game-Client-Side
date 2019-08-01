import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import CreateUserContainer from "./CreateUserContainer"
import HomePage from './Homepage'
import GameTwo from './GameTwo'
import GameOne from "./GameOne";

function Routes(props) {
  return (
    <div>
      {!props.user && (
        <Switch>
          <Route path="/user" component={CreateUserContainer} />
          <Route path="" render={() => <Redirect to="/user" />} />
        </Switch>
      )}

      {props.user && (
        <Switch>
        <Route exact path="/" component={HomePage} />
          <Route exact path="/gameone" component={GameOne} />
          <Route exact path="/gametwo" component={GameTwo} />
          <Route path="" render={() => <Redirect to="/" /> } />
        </Switch>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  user: !!state.user.id
})

export default withRouter(connect(mapStateToProps)(Routes))
