import React, { Component } from "react"
import { Container, Dropdown } from "react-bootstrap"

class SubNavbar extends Component {
  render() {
    return (
      <Container fluid className="mb-4">
        <div className="d-flex gap-3 justify-content-between align dark-bg">
          <div className="d-flex gap-3 align-items-center">
            <h1 className="text-white">TV Shows</h1>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Genre
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">History</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Romantic</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-outline-light">
                <i className="bi bi-grid"></i>
              </button>

              <button type="button" className="btn btn-outline-light">
                <i className="bi bi-text-right"></i>
              </button>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default SubNavbar
