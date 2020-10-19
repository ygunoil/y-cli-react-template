import React from 'react'
import { baseUrl } from "./../common/base.js"
import MyAjax from './../common/myajax.js'

import Toast from './Toast.js'
class CartNum extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      number: 0,
       tip:"",
       flag:false

    }
  }
  toast(tip,time){
      this.setState({
        flag:true,
        tip:tip
      })
      var timer =   setTimeout( () => {
        this.setState({
          flag:false,
          tip:""
        })
        clearTimeout(timer)
      },time)
  }

  addShopToCart(userID,goodsID,number){
    console.log(userID,number)
   var str = "?userID="+userID+"&goodsID="+goodsID + "&number="+number;
    var url = baseUrl + "updatecar.php" + str;
    MyAjax.fetch2({
      url:url,
      success:(result) => {
        if(result == "0"){
          this.toast("更新失败",1000)
        }else{
           this.toast("更新ok",1000)
        }
      },
      fail:(err) => {
        
      }
    }) 
 }
  reduce(){
    var userID = localStorage.getItem("userID")
    var goodsID = this.props.item.goodsID
    var number = this.state.number-1
    if(number <= 0){
      this.toast("至少购买一件",1000)
      this.setState({
        number: 1
      })
    }else{
      this.addShopToCart(userID,goodsID,number)
      this.setState({
        number: number
      })
    }
  }
  add(){
    var userID = localStorage.getItem("userID")
    var goodsID = this.props.item.goodsID
    var number = this.state.number - (-1)
   console.log(number)
      this.addShopToCart(userID,goodsID,number)
      this.setState({
        number: number
      })
  }
  componentDidMount(){
    this.setState({
      number: this.props.item.number
    })
  }
  render(){
    return(
      <div className ='num' >
        <input type="button" defaultValue="-" onClick = {this.reduce.bind(this)}/>
        <input type="text" value={this.state.number} />
        <input type="button" defaultValue="+" onClick = {this.add.bind(this)}/>
        <Toast flag = {this.state.flag} tip ={this.state.tip} />
      </div>
    )   
  } 
}

export default CartNum;