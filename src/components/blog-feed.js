import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "./layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useState } from "react"

import "../styles/blog-feed.styles.scss"

const BlogsFeed = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  return (
    <ol className={location === "blog" ? "blog-feed" : "blog-feed-home"}>
      {posts.map(post => {
        const title = post.frontmatter.title
        const date = post.frontmatter.date
        const contents = post.excerpt
        const slug = post.fields.slug
        const postThumbnail = getImage(post.frontmatter.thumbnail)
        return (
          <li className="blog-item" key={date}>
            <h2>
              <Link
                to={"/blog" + slug}
                itemProp="url"
                className="title-container"
              >
                <span className="blog-title">{title}</span>
              </Link>
            </h2>
            <Link to={"/blog" + slug} itemProp="url">
              <GatsbyImage
                image={postThumbnail}
                alt={title}
                className="home-image"
                key={post.title}
              />
            </Link>
            <span className="date">{date}</span>
            <div>
              <p>{contents}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

export default BlogsFeed
