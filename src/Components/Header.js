import React from 'react'
import '../Style/header.css'
import '../Style/main.css'
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        header
        <div className="logo">
          <h1>Management</h1>
          <span>chuwa</span>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
          <a href="#"></a>
        </div>
        <div className="price">
          <span></span>
          <a href="#">$0.00</a>
        </div>
        <div className="signin">
          <span></span>
          <a href="#">Sign In</a>
        </div>
      </div>
    )
  }
}
export default Header
