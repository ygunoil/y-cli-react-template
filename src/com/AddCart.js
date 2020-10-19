import React from 'react'

class Cart extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div className ='cart' >
				<i className = 'iconfont icon-gouwuche'></i>
			</div>
		)		
	}	
}

export default Cart;