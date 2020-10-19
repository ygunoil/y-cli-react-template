import React from 'react'

class Back extends React.Component{
  constructor(props){
    super(props)
  }
   back(){
//  this.props.history.goBack();
    window.history.go(-1)
  }
  render(){
    return(
       <header>
        <ul>
            <li onClick = { this.back.bind(this) }>
             <i className = "iconfont icon-fanhui"></i>
            </li>
            <li>
              {this.props.title}
            </li>
            <li>
            </li>
          </ul>
       </header>
    )   
  } 
}

export default Back;