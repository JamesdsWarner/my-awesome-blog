import React from "react"
import { Link } from "gatsby"
import "../styles/global.styles.scss"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="header">
        <Link to="/" className="home-link">
          <h2 className="home-title">NO FIXED ABODE</h2>
        </Link>
        <ul className="header-links">
          <Link to="/blog" className="header-link first-link">
            <li>Blog</li>
          </Link>
          <Link to="/about" className="header-link second-link">
            <li>About</li>
          </Link>
          <Link to="/contact" className="header-link third-link">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className="content">{children}</div>
      <div className="footer">
        <footer>
          <p>Copyright 2022</p>
        </footer>
      </div>
    </div>
  )
}

export default Layout
