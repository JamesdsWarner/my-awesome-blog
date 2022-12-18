import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import "../styles/bio.styles.scss"

const Bio = () => {
  return (
    <div className="bio-container">
      <StaticImage
        className="bio-pic"
        src="../images/bio-pic.jpg"
        quality={40}
        alt="Profile Picture"
      />
      <h4 className="bio-name">James Warner</h4>
      <span className="bio-desc">
        This is my travel blog. When I'm not travelling, I'm playing music, or
        going to the gym. Follow me on my socials to be a part of my journey!
      </span>
      <div className="about-contact">
        <Link to="/about">
          <span className="bio-link">About</span>
        </Link>
      </div>
      <div className="social-media-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <StaticImage
            src="../images/facebook.png"
            className="social-media-icon"
            alt="Facebook icon"
          />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <StaticImage
            src="../images/instagram.png"
            className="social-media-icon"
            alt="Instagram icon"
          />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <StaticImage
            src="../images/twitter.png"
            className="social-media-icon"
            alt="Twitter icon"
          />
        </a>
        <a href="https://www.pintrest.com" target="_blank" rel="noreferrer">
          <StaticImage
            src="../images/pintrest.webp"
            className="social-media-icon"
            alt="Pintrest icon"
          />
        </a>
      </div>
    </div>
  )
}

export default Bio
