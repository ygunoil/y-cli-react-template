import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import Back from './Back.js'
import Banner from './Banner.js'
import CartList from './CartList.js'
import { baseUrl } from "./../common/base.js"
import MyAjax from './../common/myajax.js'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.showList = this.showList.bind(this)
    this.state = {
      cartlist: []
    }
  }
  showList(result){
    if(result == 0){
      this.setState({
        cartlist: []
      })
    }
    this.setState({
      cartlist: result
    })
  }
  componentDidMount(){
    var userID = localStorage.getItem("userID")
    if(userID){
      var url = baseUrl + "getCar.php?userID=" + userID ;
      MyAjax.fetchJsonp2({
        url:url,
        config:{},
        success:(result) => {
          this.showList(result) //展示banner
          
        },
        fail:(err) => {
          console.log(err)
        }
      })
    }
  }
  render() {
    if(!localStorage.getItem("userID")) {
      return(
        <div className = "box">
          <Back title = "购物车" />
          <div className = 'content'>
            暂未登录
            <Link to="/login">登录</Link>
          </div>
        </div>
      )
    }
    return(
      <div className = "box">
        <Back title = "购物车" />
      <div className = 'content'>
        <CartList list = {this.state.cartlist} />
      </div></div>
    )
  }
}

export default Cart;