import React from 'react'

import Title from './Title.js'
import Price from './Price.js'
import Discount from './Discount.js'
import AddCart from './AddCart.js'


class ListRight extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className = 'listright'>
				<Title title = {this.props.listRight.goodsName} />
				<Price price = {this.props.listRight.price} />
				<Discount discount = {this.props.listRight.discount} />
			</div>
		)
	}
}

export default ListRight;