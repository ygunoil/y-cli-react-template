import React from 'react'
import ReactDOM from 'react-dom'
import Banner from './Banner.js'

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arr1: ['aaa','bbb','ccc'],
      arr2: ['111','222','333']
    }
  }
  destroyApp(){
    ReactDOM.unmountComponentAtNode(document.getElementById("app"))
  }
  render() {
    return (
      <div className = 'content'>
        内容
        <Banner  list = {this.state.arr1}/>
        <Banner  list = {this.state.arr2}/>
        <button onClick = {this.destroyApp.bind(this)}>销毁组件</button>
      </div>
    )
  }
}

export default Content;