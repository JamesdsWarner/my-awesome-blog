import * as React from "react"
import Layout from "../components/layout"
import BlogsFeed from "../components/blog-feed"
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
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
        >
          {posts
            .slice(posts.length - 5, posts.length)
            .slice(0)
            .reverse()
            .map(post => {
              const title = post.frontmatter.title
              const slug = post.fields.slug
              console.log(slug)
              const postThumbnail = getImage(post.frontmatter.thumbnail)
              return (
                <div key={post.title}>
                  <h3 className="home-post-title">{title}</h3>
                  <h3 className="read-more">
                    <Link to={"/blog" + slug}>
                      <span>Read article...</span>
                    </Link>
                  </h3>
                  <GatsbyImage
                    image={postThumbnail}
                    alt={title}
                    className="home-image"
                    key={post.title}
                  />
                </div>
              )
            })}
        </Carousel>
      </div>
      <BlogsFeed data={data} location="blog-feed-home" />

      <Link to="/blog" className="blog-link">
        <h3>See More...</h3>
      </Link>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        fields {
          slug
        }
        excerpt
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
