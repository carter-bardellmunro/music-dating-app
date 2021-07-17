import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import Header from './Header'
import Register from './Register'
import Swipe from './Swipe'

import Chat from './Chat'
import Nav from './Nav'

function App (props) {
  return (
    <>
      <Route path="/" component={Nav}/>
      <Route exact path="/signin" component={Header}/>
      <Route exact path="/chat" component={Chat}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/matching" component={Swipe}/>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
