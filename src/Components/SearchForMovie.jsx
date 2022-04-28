import React, { Component } from "react"
import MovieGallery from "./MovieGallery"

import { Form } from "react-bootstrap"
class SearchForMovie extends Component {
  state = {
    query: "",
  }
  render() {
    return (
      <>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Search For Movies"
            value={this.state.query}
            onChange={(e) => {
              this.setState({
                query: e.target.value,
              })
            }}
          />
        </Form.Group>
        {/* <MovieGallery movieTitle={this.state.query} /> */}
      </>
    )
  }
}

export default SearchForMovie
