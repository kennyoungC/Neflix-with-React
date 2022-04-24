import React, { Component } from "react"
import { Container } from "react-bootstrap"

class SubNavbar extends Component {
  render() {
    return (
      <Container fluid>
        <div class="d-flex gap-3 justify-content-between align dark-bg">
          <div class="d-flex align-items-center">
            <h1 class="text-white">TV Shows</h1>
            <div class="dropdown ml-4">
              <a
                class="btn  btn-outline-light dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Genres
              </a>

              <div
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Crime
                </a>
                <a class="dropdown-item" href="#">
                  Romantic
                </a>
              </div>
            </div>
          </div>
          <div class="">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-outline-light">
                <i class="bi bi-grid"></i>
              </button>

              <button type="button" class="btn btn-outline-light">
                <i class="bi bi-text-right"></i>
              </button>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default SubNavbar
