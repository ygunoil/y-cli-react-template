import React from 'react'
import Toast from './Toast.js'
import { baseUrl } from "./../common/base.js"
import MyAjax from './../common/myajax.js'
class CartDel extends React.Component{
	constructor(props){
		super(props)
		 this.state = {
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
//  console.log(userID,number)
   var str = "?userID="+userID+"&goodsID="+goodsID + "&number="+number;
    var url = baseUrl + "updatecar.php" + str;
    MyAjax.fetch2({
      url:url,
      success:(result) => {
        if(result == "0"){
          this.toast("删除失败",1000)
        }else{
           this.toast("删除成功",1000)
//         var list = document.getElementById("list")
//         var forlists = list.getElementsByClassName("forlist")
//         forlists[this.props.index].remove()
          window.location.reload()
        }
      },
      fail:(err) => {
        
      }
    }) 
 }
	
	del(){
	  var userID = localStorage.getItem("userID")
    var goodsID = this.props.item.goodsID
    var number = 0
	  this.addShopToCart(userID,goodsID,number)
	}
	render(){
		return(
			<div className ='cartdel' onClick={this.del.bind(this)}>
				<i className = 'iconfont icon-shanchu'></i>
				<Toast flag = {this.state.flag} tip ={this.state.tip} />
			</div>
		)		
	}	
}

export default CartDel;