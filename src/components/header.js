import { Link } from "gatsby"

import React, { Component } from "react"
import logo from "../images/logo-designcode.svg"
import "./header.css"

class Header extends Component {
  state = {
    hasScrolled: false,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = e => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 50) {
      this.setState({
        hasScrolled: true,
      })
    } else {
      this.setState({
        hasScrolled: false,
      })
    }
  }

  render() {
    return (
      <header>
        <div
          className={
            this.state.hasScrolled ? "Header HeaderScrolled" : "Header"
          }
        >
          <div className="HeaderGroup">
            <Link to="/">
              <img alt="logo" src={logo} width="30" />
            </Link>
            <Link to="/Courses">Courses</Link>
            <Link to="/Courses">Downloads</Link>
            <Link to="/Courses">Workshops</Link>
            <Link to="/Courses">
              <button>Buy</button>
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
