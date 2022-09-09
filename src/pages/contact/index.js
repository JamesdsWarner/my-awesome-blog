import * as React from "react"
import loadable from "@loadable/component"
import TextField from "@mui/material/TextField"
import { Seo } from "../../components/seo"
import "../../styles/contact.styles.scss"
const Layout = loadable(() => import("../../components/layout"))
const Button = loadable(() => import("../../components/button"))

const Contact = ({ data }) => {
  return (
    <Layout>
      <div className="contact-container">
        <h2 className="contact-heading">Contact me</h2>
        <form className="contact-form">
          <div className="form-group-top">
            <TextField
              className="form-control"
              id="outlined-basic"
              variant="outlined"
              label="Name"
              sx={{
                width: 500,
              }}
            />
          </div>
          <div className="form-group">
            <TextField
              required
              className="form-control"
              id="outlined-basic"
              variant="outlined"
              label="Email address"
              sx={{
                width: 500,
              }}
            />
          </div>
          <div className="form-group">
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={6}
              variant="outlined"
              sx={{
                width: 500,
              }}
            />
          </div>
          <div className="button-container">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Contact

export const Head = () => (
  <Seo
    title="A form to submit in order to contact the blogger"
    description="For any questions, recommendations or anything else, get in touch via my contact form."
  />
)
