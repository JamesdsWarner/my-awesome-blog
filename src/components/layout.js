import React from "react"
import "../styles.scss"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <h2 className="home-title">NO FIXED ABODE</h2>
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
