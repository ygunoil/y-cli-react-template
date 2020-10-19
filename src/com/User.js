import React from 'react'
import ReactDOM from 'react-dom'
import Banner from './Banner.js'
import Back from './Back.js'
import { baseUrl } from "./../common/base.js"
import MyAjax from './../common/myajax.js'

class User extends React.Component {
  constructor(props) {
    super(props)
  }
  toLogin(){
    this.props.history.push("/login")
  }
  toRegister(){
    this.props.history.push("/register")
  }
  cancel(){
    localStorage.removeItem("userID")
    this.props.history.push("/login")
  }
  render() {
    if(localStorage.getItem("userID")){
      return (
        <div className = "box">
        <Back title = "个人中心" />
        <div className = "content">
          <div className = 'userContent'>
            <h1>{localStorage.getItem("userID")}
              <button onClick = {this.cancel.bind(this)}>注销</button>
            </h1>
          </div>
        </div>
      </div>
        
        )
    }
    return (
      <div className = "box">
        <Back title = "个人中心" />
        <div className = "content">
          <div className = 'userContent'>
            <button onClick = {this.toLogin.bind(this)}>登录</button>
            <button onClick = {this.toRegister.bind(this)}>注册</button>
          </div>
        </div>
      </div>
    )
  }
}

export default User;