import React from 'react'

import Toast from './com/Toast.js'
import { baseUrl } from "./common/base.js"
import MyAjax from './common/myajax.js'

class wxBind extends React.Component {
  constructor(props) {
    super(props);
    this.goLogin = this.goLogin.bind(this) 
    this.toast = this.toast.bind(this);
    this.state = {
      tip:"",
      flag:false
    }
  }
  login(){
    var userID = this.refs.userID.value;
    var password = this.refs.password.value;
    if(userID == ""){
      this.toast("账号不能为空",1000)
    }else{
      if(password == ""){
       this.toast("密码不能为空",2000)
      }else{
        //注册步骤
        this.goLogin(userID,password);
      }
    }
  }
  goLogin(userID,password){
    var str = "?status=login&userID="+userID + "&password="+password;
    var url = baseUrl + "userinfo.php" + str;
    MyAjax.fetch2({
      url:url,
      success:(result) => {
        if(result == "0"){
          this.toast("用户名不存在",1000)
          this.refs.userID.value = "";
          this.refs.userID.focus();
        }else if(result == "2"){
          this.toast("密码错误",1000)
          this.refs.password.value = "";
          this.refs.password.focus();
        }else{
//        this.toast("登录",1000)
           localStorage.setItem("userID",userID)
          this.props.history.push("/home")
        }
      },
      fail:(err) => {
        
      }
    })
  }
  back(){
    this.props.history.goBack();
  }
  toast(tip,time){
     this.setState({
        flag:true,
        tip:tip
      })
    var timer =   setTimeout( () => {
        this.setState({
          flag:false,
          tip:""
        })
        clearTimeout(timer)
      },time)
  }
  render() {
    return (
      <div className = 'container'>
        <div className = "box">
          <header>
           <ul>
            <li onClick = { this.back.bind(this) }>
             <i className = "iconfont icon-fanhui"></i>
            </li>
            <li>
              微信绑定
            </li>
            <li></li>
          </ul>
        </header>
        <div className = "contentwx">
         <div className = "wxContent">
             <input type="text" className="userImg"/>
            <input type="text" className="int" autoFocus name="userID"  ref="userID" placeholder="账号"/>
            <input type="password" className="int" name="password" ref="password" placeholder="密码"/>
            <input type="password" className="int" name="password" ref="password" placeholder="验证码"/>
            <input type="button"  value="确认绑定" onClick = { this.login.bind(this) }/>
          </div>
           <Toast flag = {this.state.flag} tip ={this.state.tip} />
        </div>
        </div>
      </div>
    )
  }
  componentDidMount(){
    if(localStorage.getItem("userID")){
      this.refs.userID.value = localStorage.getItem("userID");
    }
  }
}

export default wxBind;