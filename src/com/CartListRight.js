import React from 'react'

import Title from './Title.js'
import Price from './Price.js'
import CartNum from './CartNum.js'
import CartDel from './CartDel.js'
class CartListRight extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className = 'listright'>
        <Title title = {this.props.listRight.goodsName} />
        <Price price = {this.props.listRight.price} />
        <CartNum item = {this.props.listRight}/>
        <CartDel item = {this.props.listRight} index = {this.props.index}/>
      </div>
    )
  }
}

export default CartListRight;