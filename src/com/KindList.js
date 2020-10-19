import React from 'react';

import ListImg from './Listimg.js';
import ListRight from './Listright.js';
import { Link } from 'react-router-dom'
import { baseUrl } from "./../common/base.js"
import MyAjax from './../common/myajax.js'

class KindList extends React.Component{
	constructor(props){
		super(props)
		this.getData = this.getData.bind(this);
		this.showData = this.showData.bind(this);
		this.state = {
		  list:[]
		}
	}
	showData(result){
	  this.setState({
	    list:result
	  })
	}
	getData(classID){
	  //请求列表数据
    var listUrl = baseUrl + "getGoods.php?classID="+classID;
    MyAjax.fetchJsonp2({
      url:listUrl,
      config:{},
      success:(result) => {
        this.showData(result) //展示banner
      },
      fail:(err) => {
        console.log(err)
      }
    })
	}
	componentDidMount(){
	  var classID = this.props.match.params.classID;
    this.getData(classID)
	}
  componentWillReceiveProps(nextProps){
//  console.log(nextProps)
    var classID = nextProps.match.params.classID;
    this.getData(classID)
  }
	render(){
	  var that = this;
	  if(this.state.list == "0"){
	    return (<div>暂无此商品</div>)
	  }
		return (
			<div className = 'list'>
			{
			 this.state.list.map((item,index) => {
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
export default KindList;