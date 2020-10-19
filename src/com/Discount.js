import React from 'react'

class Discount extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div className ='discount' >
				{this.props.discount}折
			</div>
		)		
	}	
}

export default Discount;