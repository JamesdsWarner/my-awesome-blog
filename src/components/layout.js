import React, { useEffect } from "react"
import { Link } from "gatsby"
import { useState } from "react"
import "../styles/global.styles.scss"

const Layout = ({ children }) => {
  const [isDropdownClicked, setIsDropdownClicked] = useState(false)

  const handleClick = () => {
    setIsDropdownClicked(!isDropdownClicked)
  }

  return (
    <div className="layout">
      <div className="header">
        <Link to="/" className="home-link">
          <h2 className="home-title">NO FIXED ABODE</h2>
        </Link>
        <div
          className={
            (isDropdownClicked ? "dropdown-icon-clicked" : "") +
            " dropdown-icon"
          }
          onClick={handleClick}
          aria-hidden="true"
        >
          <div className="menu-line-one" />
          <div className="menu-line-two" />
          <div className="menu-line-three" />
        </div>
        <ul className={`header-links ${isDropdownClicked && "active"}`}>
          <li>
            <Link to="/blog" className="header-link first-link">
              BLOG
            </Link>
          </li>

          <li>
            <Link to="/about" className="header-link second-link">
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
      <div className="content">{children}</div>
    </div>
  )
}

export default Layout
