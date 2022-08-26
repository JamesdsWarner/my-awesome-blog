import * as React from "react"
import Layout from "../../components/layout"
import { StaticImage, getImage } from "gatsby-plugin-image"
import "../../styles/about.styles.scss"

const About = ({ data }) => {
  return (
    <Layout>
      <div className="about-container">
        <StaticImage
          className="bio-pic"
          src="../../images/bio-pic.jpg"
          quality={95}
          alt="Profile Picture"
        />
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
          facilisis gravida neque convallis a cras. At urna condimentum mattis
          pellentesque id nibh tortor id. Quam elementum pulvinar etiam non
          quam. Purus faucibus ornare suspendisse sed nisi. Nunc sed blandit
          libero volutpat. Eu augue ut lectus arcu bibendum at varius. Iaculis
          at erat pellentesque adipiscing commodo elit. Non pulvinar neque
          laoreet suspendisse interdum consectetur libero id faucibus.
          Ullamcorper sit amet risus nullam eget felis eget nunc. Euismod
          lacinia at quis risus sed. Velit aliquet sagittis id consectetur. Urna
          id volutpat lacus laoreet non curabitur gravida arcu. Risus viverra
          adipiscing at in tellus integer feugiat. Purus non enim praesent
          elementum facilisis leo vel fringilla est. Eu tincidunt tortor aliquam
          nulla facilisi. Posuere urna nec tincidunt praesent semper feugiat. Ac
          odio tempor orci dapibus ultrices in iaculis nunc. Pellentesque
          habitant morbi tristique senectus et netus.
        </p>
        Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper
        malesuada. Dictum at tempor commodo ullamcorper a lacus. Adipiscing
        tristique risus nec feugiat in fermentum. Vestibulum sed arcu non odio
        euismod lacinia at. Id ornare arcu odio ut sem nulla. Curabitur vitae
        nunc sed velit dignissim sodales ut eu sem. Pretium aenean pharetra
        magna ac placerat vestibulum. Nunc lobortis mattis aliquam faucibus
        purus. Purus gravida quis blandit turpis cursus in. Tristique nulla
        aliquet enim tortor at auctor urna nunc id. Mattis rhoncus urna neque
        viverra justo nec ultrices. Nunc congue nisi vitae suscipit tellus
        mauris a diam maecenas.
        <p className="about-text">
          Ultricies leo integer malesuada nunc vel risus commodo viverra.
          Volutpat diam ut venenatis tellus in metus vulputate. Porta non
          pulvinar neque laoreet suspendisse interdum consectetur libero id. Sed
          felis eget velit aliquet. Justo laoreet sit amet cursus sit amet
          dictum sit amet. Scelerisque varius morbi enim nunc faucibus a.
          Pellentesque habitant morbi tristique senectus et netus et malesuada.
          Odio eu feugiat pretium nibh. Mi quis hendrerit dolor magna eget.
          Augue eget arcu dictum varius duis at. Velit dignissim sodales ut eu
          sem integer vitae justo eget. Id leo in vitae turpis.
        </p>
        <p className="about-text">
          Et pharetra pharetra massa massa ultricies mi. Egestas fringilla
          phasellus faucibus scelerisque eleifend donec pretium. Malesuada nunc
          vel risus commodo. Nisl nisi scelerisque eu ultrices vitae auctor eu
          augue. In fermentum et sollicitudin ac orci phasellus egestas tellus.
          Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque
          purus. Diam in arcu cursus euismod quis. Tincidunt dui ut ornare
          lectus sit amet est placerat in. Lobortis mattis aliquam faucibus
          purus in massa tempor. Est ullamcorper eget nulla facilisi etiam
          dignissim. Commodo sed egestas egestas fringilla phasellus faucibus
          scelerisque eleifend donec. Nunc sed augue lacus viverra vitae congue.
          Integer vitae justo eget magna. Condimentum mattis pellentesque id
          nibh tortor id aliquet lectus. Augue ut lectus arcu bibendum. Nisl
          condimentum id venenatis a condimentum vitae sapien pellentesque.
          Scelerisque mauris pellentesque pulvinar pellentesque habitant. Fames
          ac turpis egestas integer eget aliquet nibh. Vestibulum lectus mauris
          ultrices eros in cursus turpis massa. Rutrum quisque non tellus orci.
        </p>
        <p className="about-text">
          Sit amet nisl suscipit adipiscing. Viverra nam libero justo laoreet
          sit amet cursus sit. Imperdiet proin fermentum leo vel orci porta.
          Facilisis volutpat est velit egestas dui id ornare arcu. Maecenas
          volutpat blandit aliquam etiam erat velit. Pharetra convallis posuere
          morbi leo urna molestie at elementum eu. Dignissim sodales ut eu sem
          integer vitae. Dolor sit amet consectetur adipiscing. Iaculis urna id
          volutpat lacus laoreet non curabitur gravida arcu. A cras semper
          auctor neque vitae. Scelerisque eu ultrices vitae auctor eu augue.
          Felis donec et odio pellentesque diam volutpat commodo sed egestas.
        </p>
      </div>
    </Layout>
  )
}

export default About
