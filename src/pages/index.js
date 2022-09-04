import * as React from "react"
import Layout from "../components/layout"
import BlogsFeed from "../components/blog-feed"
import { Seo } from "../components/seo"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import "../styles/global.styles.scss"
import "../styles/home.styles.scss"

const Home = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div className="home-container">
        <StaticImage
          className="home-background-pic"
          src="../images/holiday-background.webp"
          quality={100}
          alt="Beach background picture"
        />
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
          showArrows={false}
        >
          {posts
            .slice(posts.length - 5, posts.length)
            .slice(0)
            .reverse()
            .map((post, i) => {
              const title = post.frontmatter.title
              const slug = post.fields.slug
              console.log(slug)
              const postThumbnail = getImage(post.frontmatter.thumbnail)
              return (
                <div key={i}>
                  <div className="blog-title-shape">
                    <div
                      className={
                        (title.length > 6 ? "long-title" : "") + " one-line"
                      }
                    >
                      <span className="home-post-title">{title}</span>
                    </div>
                    <Link to={"/blog" + slug}>
                      <span className="read-article">Read article...</span>
                    </Link>
                  </div>
                  <GatsbyImage
                    image={postThumbnail}
                    alt={title}
                    className="home-image"
                  />
                </div>
              )
            })}
        </Carousel>
      </div>
      <div>
        <BlogsFeed data={data} location="blog-feed-home" />
      </div>
      <Link to="/blog" className="blog-link">
        <h3>See More...</h3>
      </Link>
    </Layout>
  )
}

export default Home

export const Head = () => (
  <Seo
    title="Homepage of blog site with blog previews"
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
