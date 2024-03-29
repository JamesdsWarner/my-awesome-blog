import * as React from "react"
import { graphql } from "gatsby"
import "../../styles/global.styles.scss"
import "../../styles/blog.styles.scss"
import loadable from "@loadable/component"
import { Seo } from "../../components/seo"
const BlogsFeed = loadable(() => import("../../components/blog-feed"))
const Layout = loadable(() => import("../../components/layout"))
const Bio = loadable(() => import("../../components/bio"))

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
    title="Blog post archives || NO FIXED ABODE"
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
                width: 700
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
