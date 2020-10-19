import React from 'react'
import ReactDOM from 'react-dom'
import Banner from './Banner.js'
import { Link } from 'react-router-dom'

import { baseUrl } from "./../common/base.js"
import MyAjax from './../common/myajax.js'
import HomeList from './HomeList.js'
import Back from './Back.js'
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.showBanner = this.showBanner.bind(this);
    this.showList = this.showList.bind(this);
    this.state = {
      bannerList:[],
      homeList:[]
    }
  }
//test(){
//  console.log(this)
//  this.props.history.push("/login")
//}
  render() {
    return (
      <div className = "box">
        <Back title = "首页" />
          <div className = "content">
            <div className = 'homeContent'>
            <Banner bannerList = { this.state.bannerList }/>
            <HomeList list = { this.state.homeList }/>
          </div>
        </div>
      </div>
    )
  }
  
  /**
   * 显示HomeList组件的数据 
   */
  showList(result){
    console.log(result)
    this.setState({
      homeList: result
    })
  }
  /**
   * 显示banner组件的数据 
   */
  showBanner(result){
    var arr = [];
    for(var item of result){
       arr.push(JSON.parse(item.goodsBenUrl)[0])
    }
    this.setState({
      bannerList: arr
    })
  }
  componentDidMount(){
    //请求banner的数据
    var bannerurl = baseUrl + "getBanner.php";
    MyAjax.fetchJsonp2({
      url:bannerurl,
      config:{},
      success:(result) => {
        this.showBanner(result) //展示banner
      },
      fail:(err) => {
        console.log(err)
      }
    })
    //请求列表数据
    var listUrl = baseUrl + "getGoods.php";
    MyAjax.fetchJsonp2({
      url:listUrl,
      config:{},
      success:(result) => {
        this.showList(result) //展示banner
      },
      fail:(err) => {
        console.log(err)
      }
    })

//    window.addEventListener("popstate", function(e) { 
//      var hashLocation = location.hash;
//      var hashSplit = hashLocation.split("#!/");
//      var hashName = hashSplit[1];
//
//      if (hashName !== '') {
//        var hash = window.location.hash;
//        if (hash === '') {
//          alert('後退按鈕點擊');
//        }
//      }
//    }, false); 
//    window.history.pushState('forward', null, './#forward');
    
    //请求列表的数据
  }
}

export default Home;