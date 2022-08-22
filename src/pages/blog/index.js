import * as React from "react"
import { Link, graphql } from "gatsby"
import "../../styles/global.styles.scss"
import "../../styles/blog.styles.scss"

const BlogFeed = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes
  return (
    <>
      <ol>
        {posts.map(post => {
          const title = post.frontmatter.title
          const date = post.frontmatter.date
          const contents = post.excerpt
          const slug = post.fields.slug
          return (
            <li key={date}>
              <h2>
                <Link to={"/blog" + slug} itemProp="url">
                  <span>{title}</span>
                </Link>
              </h2>
              <span>{date}</span>
              <div>
                <p>{contents}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </>
  )
}

export default BlogFeed

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
