import * as React from "react"
import { graphql } from "gatsby"
import "../../styles/global.styles.scss"
import "../../styles/blog.styles.scss"
import BlogsFeed from "../../components/blog-feed"
import Layout from "../../components/layout"
import Bio from "../../components/bio"
import { Seo } from "../../components/seo"

const BlogFeed = ({ data }) => {
  return (
    <Layout>
      <div className="bio-blog-container">
        <BlogsFeed data={data} location="blog" />
        <Bio />
      </div>
    </Layout>
  )
}

export default BlogFeed

export const Head = () => (
  <Seo
    title="Feed of all the blog posts"
    description="Check out all of my blog posts in one place."
  />
)

export const blogFeedQuery = graphql`
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
