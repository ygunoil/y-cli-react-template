import React from 'react'
import { NavLink } from 'react-router-dom' 
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <footer >
        <ul>
          <li>
              <NavLink  activeClassName="active" to="/home">
                <i className="iconfont icon-shouye"></i>
                <p>首页</p>
              </NavLink>
          </li>
          <li>
                <NavLink activeClassName="active" to="/kind">
                  <i className="iconfont icon-fenlei"></i>
                  <p>分类</p>
                </NavLink>
          </li>
          <li>
                <NavLink activeClassName="active" to="/cart">
                <i className="iconfont icon-gouwuche1"></i>
                <p>购物车</p>
                </NavLink>
          </li>
          <li>
                <NavLink activeClassName="active" to="/user">
                <i className="iconfont icon-wode"></i>
                <p>我的</p>
                </NavLink>
          </li>
        </ul>
      </footer>
    )
  }
}

export default Footer;