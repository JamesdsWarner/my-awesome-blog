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
          location === "blog" ? posts.length - 5 : posts.length - 10,
          location === "blog" ? posts.length : posts.length - 5
        )
        .slice(0)
        .reverse()
        .map(post => {
          const title = post.frontmatter.title
          const date = post.frontmatter.date
          const contents = post.excerpt
          const slug = post.fields.slug
          const postThumbnail = getImage(post.frontmatter.thumbnail)
          return (
            <li className="blog-item" key={date}>
              <h2>
                <Link
                  to={"/james" + slug}
                  itemProp="url"
                  className="title-container"
                >
                  <span className="blog-title">{title}</span>
                </Link>
              </h2>
              <Link to={"/james" + slug} itemProp="url">
                <div className="home-image-container">
                  <GatsbyImage
                    image={postThumbnail}
                    alt={title}
                    className="home-image"
                    key={post.title}
                  />
                </div>
              </Link>
              <div className="post-caption-container">
                <div className="post-caption"></div>
              </div>
              <span className="date">{date}</span>
              <div>
                <p>{contents}</p>
              </div>
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
