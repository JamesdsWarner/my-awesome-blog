import React from "react"
import { Link } from "gatsby"
import "../styles/global.styles.scss"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Link to="/" className="home-link">
        <h2 className="home-title">NO FIXED ABODE</h2>
      </Link>
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
