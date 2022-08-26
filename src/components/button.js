import * as React from "react"
import "../styles/button.styles.scss"

const Button = ({ children }) => {
  return <button className="button">{children}</button>
}

export default Button
