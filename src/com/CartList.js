import React from 'react';

import ListImg from './Listimg.js';
import CartListRight from './CartListRight.js';
import { Link } from 'react-router-dom'
import { baseUrl } from "./../common/base.js"
import MyAjax from './../common/myajax.js'
import Back from './Back.js';
class CartList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    if(this.props.list){
      return (
      <div className = 'list' id = "list">
      {
       this.props.list.map((item,index) => {
          return(
           
              <div className ='forlist' key= {index} >
                <Link to = {'/detail/' + item.goodsID} > 
                  <ListImg  listImg = {item.goodsListImg} />
                </Link>
                <CartListRight listRight = {item} index = {index}/>
              </div>
            
          )
        })
      }
      </div>
    )
    }else{
      return(
        <div className = "box">
        <div className = 'content'>
          购物车空空如也,<Link to="/home">去购物</Link>
        </div></div>
      )
    }
    
  }
}
export default CartList;