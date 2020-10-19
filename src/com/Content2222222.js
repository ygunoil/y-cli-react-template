import React from 'react'
import ReactDOM from 'react-dom'
import Banner from './Banner.js'
import { Route, Switch, Redirect } from 'react-router-dom'

import Back from './Back.js'
import Home from './Home.js'
import Kind from './Kind.js'
import Cart from './Cart.js'
import User from './User.js'

import { baseUrl } from "./../common/base.js"
import MyAjax from './../common/myajax.js'

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title:"首页"
    }
  }
  componentDidUpdate(){
    console.log("aa",this)
  }
  render() {
    return (
      <div className="box">
          <Back title={this.state.title}/>
          <div className = 'content'>
            
          </div>
      </div>
    )
  }
}

export default Content;