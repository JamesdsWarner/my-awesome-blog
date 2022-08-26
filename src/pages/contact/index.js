import * as React from "react"
import Layout from "../../components/layout"
import TextField from "@mui/material/TextField"
import Button from "../../components/button"
import "../../styles/contact.styles.scss"

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
