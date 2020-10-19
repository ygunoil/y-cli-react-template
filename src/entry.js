import React from 'react'
import ReactDOM from 'react-dom'

import FastClick from 'fastclick'
import Es6Promise from 'es6-promise'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import App from './App.js'
import Detail from './Detail.js'
import wxBind from './wxBind.js'
import telBind from './telBind.js'
import modifyPassword from './modifyPassword.js'
import Register from './Register.js'

import './main.scss'

FastClick.attach(document.body)
Es6Promise.polyfill()

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}


ReactDOM.render(<ErrorBoundary>
  <Router>
    <Switch>
        <Route path = "/wxBind" component = {wxBind} />
        <Route path = "/register" component = {Register} />
        <Route path = "/telBind" component = {telBind} />
        <Route path = "/modifyPassword" component = {modifyPassword} />
        <Route path = "/detail/:goodsID" component = {Detail} />
        <Route path = "/" component = {App} />
    </Switch>
  </Router>
</ErrorBoundary>, document.getElementById("app"));
