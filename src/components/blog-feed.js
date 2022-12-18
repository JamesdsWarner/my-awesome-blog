import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../styles/blog-feed.styles.scss"

const BlogsFeed = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  const n = 4
  return (
    <ol className={location === "blog" ? "blog-feed" : "blog-feed-home"}>
      {posts
        .slice(
          location === "blog" ? 0 : posts.length - 10,
          location === "blog" ? posts.length : posts.length - 5
        )
        .slice(0)
        .reverse()
        .map((post, i) => {
          const title = post.frontmatter.title
          const date = post.frontmatter.date
          const contents = post.excerpt
          const slug = post.fields.slug
          const postThumbnail = getImage(post.frontmatter.thumbnail)
          return (
            <li className="blog-item" key={i}>
              <Link to={"/blog" + slug} itemProp="url">
                <div className="home-image-container">
                  <GatsbyImage
                    image={postThumbnail}
                    alt={title}
                    className="home-image"
                    key={post.title}
                  />
                </div>
                <div className="post-caption-container">
                  <div className="post-caption">
                    <span className="blog-title">{title}</span>
                    <span className="date">{date}</span>
                    <p className="contents">{contents}</p>
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      {[...Array(n)].map((e, i) => (
        <li className="blog-item" key={i} />
      ))}
    </ol>
  )
}

export default BlogsFeed
