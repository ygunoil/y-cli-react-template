import React from 'react'
import ReactDOM from 'react-dom'
import Banner from './Banner.js'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Back from './Back.js'
import { baseUrl } from "./../common/base.js"
import MyAjax from './../common/myajax.js'

import KindList from './KindList.js'

class Kind extends React.Component {
  constructor(props) {
    super(props)
    this.showNavList = this.showNavList.bind(this)
    
    this.state = {
      navlist: [],
      kindList:[]
    }
  }
  
 
  render() {
    return (
      <div className = "box">
        <Back title = "分类" />
        <div className = "content">
      <div className = 'kindContent'>
        <nav>
          <ul>
          {
            this.state.navlist.map((item, index) => {
              return (
                <li key = {item.classID}>
                  <NavLink activeClassName="active" to={'/kind/' + item.classID}>{item.className}
                </NavLink>
                </li>
              )
            })
          }
          </ul>
        </nav>
        {/* <KindList list = { this.state.kindList }/>*/}
        <Switch>
          <Route path= "/kind/:classID" component = {KindList} />
          <Redirect path="/kind" to="/kind/1" />
        </Switch>
      </div></div>
       </div>
    )
  }
  showNavList(result) {
    console.log(result)
    this.setState({
      navlist:result
    })
  }
  componentDidMount(){
    var navUrl = baseUrl + "getclass.php";
    MyAjax.fetch2({
      url:navUrl,
      success:(result) => {
        this.showNavList(result) //展示banner
      },
      fail:(err) => {
        console.log(err)
      }
    })
  }
}

export default Kind;