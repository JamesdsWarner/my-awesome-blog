import * as React from "react"
import loadable from "@loadable/component"
import { useState, useEffect } from "react"
import { Seo } from "../components/seo"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import "../styles/global.styles.scss"
import "../styles/home.styles.scss"
const Layout = loadable(() => import("../components/layout"))
const BlogsFeed = loadable(() => import("../components/blog-feed"))

const Home = ({ data }) => {
  const [deviceSize, setDeviceSize] = useState(
    typeof window !== "undefined" ? window.innerWidth : null
  )

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        window.addEventListener("resize", handleResize)
        setDeviceSize(window.innerWidth)
        return () => window.removeEventListener("resize", handleResize)
      } else return null
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize)

      return () => window.removeEventListener("resize", handleResize)
    } else return null
  }, [])

  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className="home-container">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
          showArrows={true}
          swipeScrollTolerance="20"
          preventMovementUntilSwipeScrollTolerance={true}
        >
          {posts
            .slice(posts.length - 5, posts.length)
            .slice(0)
            .reverse()
            .map((post, i) => {
              const title = post.frontmatter.title
              const slug = post.fields.slug
              console.log(slug)
              const contents = post.excerpt
              const postThumbnail = getImage(post.frontmatter.thumbnail)
              console.log(i)

              return (
                <div className="home-inner" key={i}>
                  <div className={`blog-title-shape carousel-color-${i}`}>
                    <div
                      className={
                        (title.length > 6 ? "long-title" : "") + " one-line"
                      }
                    >
                      <span className="home-post-title">{title}</span>
                    </div>
                    <Link className="article-link" to={"/blog" + slug}>
                      <span className="read-article">Read article...</span>
                    </Link>
                  </div>
                  <GatsbyImage
                    image={postThumbnail}
                    alt={title}
                    className="home-image"
                  />
                  <div className={`carousel-color-block carousel-color-${i}`}>
                    <span className="colour-block-title">{title}</span>
                    <div className="home-carousel-line" />
                    <p className="carousel-excerpt">{contents}</p>
                    <Link to={"/blog" + slug} className="read-article">
                      <span className="read-article-inner">
                        Read article...
                      </span>
                    </Link>
                  </div>

                  <GatsbyImage
                    image={postThumbnail}
                    alt={title}
                    className="home-image-double"
                  />
                </div>
              )
            })}
        </Carousel>
      </div>
      <div>
        <BlogsFeed data={data} location="blog-feed-home" />
      </div>
      <Link
        style={{
          marginBottom:
            posts.length < 6
              ? deviceSize > "1250"
                ? "140px"
                : deviceSize < "1250" && deviceSize > 800
                ? "370px"
                : deviceSize < "800"
                ? "210px"
                : 0
              : "40px",
        }}
        to="/blog"
        className="blog-link"
      >
        <h3>{posts.length < 6 ? "See all..." : "See More..."}</h3>
      </Link>
    </Layout>
  )
}

export default Home

export const Head = () => (
  <Seo
    title="NO FIXED ABODE"
    description="[bloggers] official travel blog. Join the journey and read about my experiences, my takeaways and reviews of popular traveller destinations!"
  />
)

export const homePageQuery = graphql`
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
                width: 1200
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
