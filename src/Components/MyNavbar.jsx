import React, { Component } from "react"
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Dropdown,
  Button,
  Anchor,
} from "react-bootstrap"
class MyNavbar extends Component {
  render() {
    return (
      <Navbar expand="lg" className="nav-bar ">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              className="netflix-logo"
              src="./images/netflix_logo.png"
              alt="Netflix Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="text-white" href="#action1">
                Home
              </Nav.Link>
              <Nav.Link className="text-muted" href="#action2">
                TV Shows
              </Nav.Link>
              <Nav.Link className="text-muted" href="#">
                Recently Added
              </Nav.Link>
              <Nav.Link className="text-muted" href="#">
                My List
              </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center gap-3">
              <span>
                <i className="bi bi-search"></i>
              </span>
              <p className="my-0 ml-3 text-white">KIDS</p>
              <i className="bi bi-bell"></i>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" variant="dark">
                  <img
                    className="dropdown-img"
                    src="./images/avatar.png"
                    alt=""
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu className="drop-down-menu " bg="dark">
                  <Dropdown.Item href="#/action-1">heritage</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">kenneth</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">favour</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default MyNavbar
