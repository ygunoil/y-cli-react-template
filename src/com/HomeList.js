import React from 'react';

import ListImg from './Listimg.js';
import ListRight from './Listright.js';
import { Link } from 'react-router-dom'

class HomeList extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
	  var that = this;
		return (
			<div className = 'list'>
			{
				this.props.list.map((item,index) => {
					return(
						<Link to = {'/detail/' + item.goodsID} key= {index}>
  						<div className ='forlist'  >
  							<ListImg  listImg = {item.goodsListImg} />
  							<ListRight listRight = {item} />
  						</div>
						</Link>
					)
				})
			}
			</div>
		)
	}
}
export default HomeList;