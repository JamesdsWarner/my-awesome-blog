import * as React from "react"
import loadable from "@loadable/component"
import { StaticImage } from "gatsby-plugin-image"
import { Seo } from "../../components/seo"
import "../../styles/about.styles.scss"
const Layout = loadable(() => import("../../components/layout"))

const About = ({ data }) => {
  return (
    <Layout>
      <div className="about-container">
        <div className="about-pic-container">
          <StaticImage
            className="about-pic"
            src="../../images/bio-pic.jpg"
            quality={100}
            alt="Profile Picture"
          />
        </div>
        <div className="about-text">
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
            facilisis gravida neque convallis a cras. At urna condimentum mattis
            pellentesque id nibh tortor id. Quam elementum pulvinar etiam non
            quam. Purus faucibus ornare suspendisse sed nisi.
          </p>
          <p>
            Nunc sed blandit libero volutpat. Eu augue ut lectus arcu bibendum
            at varius. Iaculis at erat pellentesque adipiscing commodo elit. Non
            pulvinar neque laoreet suspendisse interdum consectetur libero id
            faucibus.
          </p>
          <p>
            Ullamcorper sit amet risus nullam eget felis eget nunc. Euismod
            lacinia at quis risus sed. Velit aliquet sagittis id consectetur.
            Urna id volutpat lacus laoreet non curabitur gravida arcu. Risus
            viverra adipiscing at in tellus integer feugiat.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About

export const Head = () => (
  <Seo
    title="About || NO FIXED ABODE"
    description="A little bit about me and my travelling journey so far."
  />
)
