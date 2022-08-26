import * as React from "react"
import { Link, graphql } from "gatsby"
import "../../styles/global.styles.scss"
import "../../styles/blog.styles.scss"
import BlogsFeed from "../../components/blog-feed"
import Layout from "../../components/layout"
import Bio from "../../components/bio"

const BlogFeed = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes
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
