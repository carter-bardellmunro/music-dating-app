import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import Header from './Header'
import Register from './Register'

function App (props) {
  return (
    <>
      <Route exact path="/" component={Header}/>
      <Route path="/register" component={Register}/>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
