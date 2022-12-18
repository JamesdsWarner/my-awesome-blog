import * as React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Seo } from "../components/seo"
import loadable from "@loadable/component"
import "../styles/global.styles.scss"
import "../styles/blog-post.styles.scss"
const Layout = loadable(() => import("../components/layout"))
const Bio = loadable(() => import("../components/bio"))

const BlogPostTemplate = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, date, thumbnail } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className="blog-post-container">
        <div className="details">
          <h2>{title}</h2>
          <div className="featured">
            <GatsbyImage
              image={getImage(thumbnail.childImageSharp.gatsbyImageData)}
              alt="Projects"
            />
            <p className="date">{date}</p>
          </div>

          <div className="html" dangerouslySetInnerHTML={{ __html: html }} />
        </div>

        <Bio />
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const Head = () => <Seo title="blog post" description="blog post" />

export const query = graphql`
  query BlogPostBySlug($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        layout
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 800
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF, PNG]
            )
          }
        }
      }
      id
    }
  }
`
