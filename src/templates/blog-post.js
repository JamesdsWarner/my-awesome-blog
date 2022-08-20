import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import "../styles/global.styles.scss"
import "../styles/blog-post.styles.scss"

const BlogPostTemplate = () => {
  ;<Layout>
    <div className="details">
      <h2>{title}</h2>
      <div className="featured">{/* <GatsbyImage fluid={} /> */}</div>
      {/* <div className="html" dangerouslySetInnerHTML={}/> */}
    </div>
  </Layout>
}

export default BlogPostTemplate
