import React from 'react'

class ListImg extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div className ='listimg' >
				<img src = {this.props.listImg} />
			</div>
		)		
	}	
}

export default ListImg;