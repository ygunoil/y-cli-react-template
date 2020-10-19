import React from 'react'

class Banner extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
//  console.log(this.props.bannerList)
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
            {
              this.props.bannerList.map((item, index) => {
                return (
                  <div className="swiper-slide" key = {index}>
                    <img src = {item} />
                  </div>
                )
              })
            }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
  componentDidUpdate(){
    var mySwiper = new Swiper ('.swiper-container', {
//  direction: 'vertical',
    loop: true,
    autoplay:{
      stopOnLastSlide:true,
      delay:1000,
      disableOnInteraction:false
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    }
  })        
  }
}
export default Banner;