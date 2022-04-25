import React, { Component } from "react"

class MyFooter extends Component {
  render() {
    return (
      <footer className="container">
        <div className="d-flex social-icons mb-2">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-youtube"></i>
        </div>
        <div className="row">
          <div className="col">
            <p>Audio and Subtitles</p>
            <p>Media Center</p>
            <p>Privacy</p>
            <p>Contact Us</p>
          </div>
          <div className="col">
            <p>Audio Description</p>
            <p>Investor Relations</p>
            <p>Legal Notices</p>
          </div>
          <div className="col">
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
          </div>
          <div className="col">
            <p>Gift Cards</p>
            <p>Term of Use</p>
            <p>Corporate Information</p>
          </div>
        </div>
        <p className="app-icon d-inline-block"> Service Code</p>
        <p>&copy; 1997-2022 Netflix, Inc i-0d00fcda2f9c0de</p>
      </footer>
    )
  }
}

export default MyFooter
