import React from 'react'

import Back from './com/Back.js'
import Home from './com/Home.js'
import Kind from './com/Kind.js'
import Cart from './com/Cart.js'
import User from './com/User.js'

import Footer from './com/Footer.js'
import { Route, Switch, Redirect } from 'react-router-dom'
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    /*var strHtml= ""
    window.alert = function(str) {
          var shield = document.createElement("DIV");
          shield.id = "shield";
          shield.style.position = "absolute";
          shield.style.left = "50%";
          shield.style.top = "50%";
          shield.style.width = "280px";
          shield.style.height = "150px";
          shield.style.marginLeft = "-140px";
          shield.style.marginTop = "-110px";
          shield.style.zIndex = "25";
          var alertFram = document.createElement("DIV");
          alertFram.id = "alertFram";
          alertFram.style.position = "absolute";
          alertFram.style.width = "280px";
          alertFram.style.height = "150px";
          alertFram.style.left = "50%";
          alertFram.style.top = "50%";
          alertFram.style.marginLeft = "-140px";
          alertFram.style.marginTop = "-110px";
          alertFram.style.textAlign = "center";
          alertFram.style.lineHeight = "150px";
          alertFram.style.zIndex = "300";
          strHtml = "<ul style=\"list-style:none;margin:0px;padding:0px;width:100%\">\n";
          strHtml += " <li style=\"background:#626262;text-align:left;padding-left:20px;font-size:14px;font-weight:bold;height:25px;line-height:25px;border:1px solid #F9CADE;color:white\">[删除产品]</li>\n";
          strHtml += " <li style=\"background:#787878;text-align:center;font-size:12px;height:95px;line-height:95px;border-left:1px solid #F9CADE;border-right:1px solid #F9CADE;color:#DCC722\">" + str + "</li>\n";
          strHtml += " <li style=\"background:#626262;text-align:center;font-weight:bold;height:30px;line-height:25px; border:1px solid #F9CADE;\"><input type=\"button\" value=\"确 定\" onclick=\"doOk()\" style=\"width:80px;height:20px;background:#626262;color:white;border:1px solid white;font-size:14px;line-height:20px;outline:none;margin-top: 4px\"/></li>\n";
          strHtml += "</ul>\n";
          alertFram.innerHTML = strHtml;
          document.body.appendChild(alertFram);
          document.body.appendChild(shield);
          this.doOk = function() {
            alertFram.style.display = "none";
            shield.style.display = "none";
          }
          alertFram.focus();
          document.body.onselectstart = function() {
            return false;
          };
        }*/
  }
  render() {
    return (
      <div className = 'container'>
        <Switch>
          <Route path="/home" component = {Home} />
          <Route path="/kind" component = {Kind} />
          <Route path="/cart" component = {Cart} />
          <Route path="/user" component = {User} />
          <Redirect path = "/" to = "/home" />
        </Switch>
        <Footer />
        
        <div className = "tooltip" id="tooltip">
          <div className = "tipBox">
            <h2>确定删除该商品?</h2>
            <div>
              <span>取消</span>
              <span>确定</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;