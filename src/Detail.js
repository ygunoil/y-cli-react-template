import React from 'react'
import { Link } from 'react-router-dom'

import { baseUrl } from "./common/base.js"
import MyAjax from './common/myajax.js'
import Banner from './com/Banner.js'
import Toast from './com/Toast.js'

class App extends React.Component {
  constructor(props) {
    super(props);
     this.toast = this.toast.bind(this);
    this.getData = this.getData.bind(this)
    this.showData = this.showData.bind(this)
    this.addShopToCart = this.addShopToCart.bind(this)
    this.state = {
      imgs:[],
      goodsName:"",
      price:0,
      goodsID:0
    }
  }
  
  componentDidMount(){
    console.log(this)
    var goodsID = this.props.match.params.goodsID
    console.log(goodsID)
    //请求数据
    this.getData(goodsID);
  }
  getData(goodsID){
    var url = baseUrl + "getGoods.php?goodsID=" + goodsID;
    MyAjax.fetchJsonp2({
      url:url,
      config:{},
      success:(result) => {
        this.showData(result) //展示banner
      },
      fail:(err) => {
        console.log(err)
      }
    })
  }
 showData(result){
   console.log(JSON.parse(result[0].goodsBenUrl))
   this.setState({
     imgs: JSON.parse(result[0].goodsBenUrl),
     goodsName: result[0].goodsName,
     price: result[0].price,
     goodsID:result[0].goodsID,
     tip:"",
     flag:false

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

 addCart(){
   var userID = localStorage.getItem("userID");
   if(userID){
     console.log("addcart")
     this.addShopToCart(userID, this.state.goodsID, 1);
   }else{
     this.props.history.push("/login")
   }
 }
 addShopToCart(userID,goodsID,number){
   var str = "?userID="+userID+"&goodsID="+goodsID + "&number="+number;
    var url = baseUrl + "updatecar.php" + str;
    MyAjax.fetch2({
      url:url,
      success:(result) => {
        if(result == "0"){
          this.toast("加入失败",1000)
        }else{
          this.toast("加入成功",1000)
        }
      },
      fail:(err) => {
        
      }
    }) 
 }
 back(){
    this.props.history.goBack();
  }
  render() {
    return (
      <div className = 'container'>
        <div className="box">
          <header>
           <ul>
            <li onClick = { this.back.bind(this) }>
             <i className = "iconfont icon-fanhui"></i>
            </li>
            <li>
              详情
            </li>
            <li>
              <Link to="/cart" ><i className = "iconfont icon-gouwuche"></i></Link>
            </li>
          </ul>
        </header>
        <div className = "content">
         <div className = "detailContent">
          <Banner bannerList = { this.state.imgs } />
           <h3>{this.state.goodsName}</h3>
           <p>{this.state.price}</p>
         
         </div>
         <Toast flag = {this.state.flag} tip ={this.state.tip} />
        </div>
        </div>
        <footer>
          <ul>
            <li>快速购买</li>
             <li onClick = { this.addCart.bind(this) }>加入购物车</li>
          </ul>
        </footer>
        
      </div>
    )
  }
}

export default App;