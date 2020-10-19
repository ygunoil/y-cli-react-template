import React from 'react'

import Toast from './com/Toast.js'
import { baseUrl } from "./common/base.js"
import MyAjax from './common/myajax.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.goRegister = this.goRegister.bind(this);
    this.toast = this.toast.bind(this);
    this.state = {
      tip:"",
      flag:false
    }
  }
  
  back(){
    console.log(this.props)
    this.props.history.goBack();
//  this.props.history.go(-1);
//  window.history.go(-1)
  }
  //正则验证
  register () {
    var userID = this.refs.userID.value;
    var password = this.refs.password.value;
    if(userID == ""){
      this.toast("用户名不能为空",1000)
    }else{
      if(password == ""){
       this.toast("密码不能为空",2000)
      }else{
        //注册步骤
        this.goRegister(userID,password);
      }
    }
  }
  //ajax提交数据
  goRegister(userID,password){
    var str = "?status=register&userID="+userID + "&password="+password;
    var url = baseUrl + "userinfo.php" + str;
    MyAjax.fetch2({
      url:url,
      success:(result) => {
        if(result == "0"){
          this.toast("用户名已存在",1000)
          this.refs.userID.value = "";
          this.refs.userID.focus();
        }else if(result == "2"){
          this.toast("注册失败",1000)
          this.refs.userID.value = "";
          this.refs.password.value = "";
          this.refs.userID.focus();
        }else{
          this.toast("注册成功",1000)
          localStorage.setItem("userID",userID)
          this.props.history.push("/login")
        }
      },
      fail:(err) => {
        
      }
    })
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
              注册
            </li>
            <li></li>
          </ul>
        </header>
        <div className = "content">
          <div className = "userContent">
            <input type="text" autoFocus name="userID"  ref="userID" placeholder="请输入用户名"/>
            <input type="password" name="password" ref="password" placeholder="请输入密码"/>
            <input type="button"  value="同意协议并注册" onClick = { this.register.bind(this) }/>
          </div>
           <Toast flag = {this.state.flag} tip ={this.state.tip} />
        </div>
        </div>
      </div>
    )
  }
}

export default App;