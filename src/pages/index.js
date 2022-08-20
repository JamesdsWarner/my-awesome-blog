import * as React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import "../styles/global.styles.scss"
import "../styles/home.styles.scss"

const Home = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div className="home-container">
        <Carousel showThumbs={false} infiniteLoop={true}>
          {posts.map(post => {
            const title = post.frontmatter.title
            const date = post.frontmatter.date
            const postThumbnail = getImage(post.frontmatter.thumbnail)
            return (
              <>
                <div>
                  <h3 className="home-post-title">{title}</h3>
                  <h3 className="read-more">
                    <Link to={date}>
                      <span>Read article...</span>
                    </Link>
                  </h3>
                  <GatsbyImage
                    image={postThumbnail}
                    alt={title}
                    className="home-image"
                  />
                </div>
              </>
            )
          })}
        </Carousel>
        <h3 className="blog-link">
          <Link to="/blog">
            <span>Blog</span>
          </Link>
        </h3>
      </div>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          thumbnail {
            childImageSharp {
              gatsbyImageData(
                width: 1700
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF, PNG]
              )
            }
          }
        }
      }
    }
  }
`
