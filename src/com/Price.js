import React from 'react'

class Price extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div className ='price' >
				￥{this.props.price}
			</div>
		)		
	}	
}

export default Price;