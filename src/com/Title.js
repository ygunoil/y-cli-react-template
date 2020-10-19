import React from 'react'

class Title extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div className ='title' >
				{this.props.title}
			</div>
		)		
	}	
}

export default Title;