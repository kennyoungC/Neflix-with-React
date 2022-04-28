import React, { Component, useState } from "react"
import { Navbar, Container, Nav, Dropdown, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import netflixlogo from "../netflix_logo.png"
import SearchForMovie from "./SearchForMovie"
const MyNavbar = (props) => {
  // state = {
  //   searchString: "",
  // }
  const [searchString, setSearchString] = useState("")

  const searchStringHandler = (e) => {
    if (e.keyCode === 13) {
      // WHEN ENTER KEY IS PRESSED
      props.showSearchResult(searchString)
    } else {
      setSearchString(e.currentTarget.value)
    }
  }

  return (
    <Navbar expand="lg" className="nav-bar " variant="dark">
      <Container fluid>
        <Link to={"/"}>
          <div className="navbar-brand">
            <img
              className="netflix-logo"
              src={netflixlogo}
              alt="Netflix Logo"
            />
          </div>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to={"/"}>
              <div className="nav-link active text-decoration-none">Home</div>
            </Link>
            <Link to={"/tvshows"}>
              <div className="nav-link text-decoration-none">TV Shows</div>
            </Link>
            <Link to={"/recently-added"}>
              <div className="nav-link text-decoration-none">
                Recently Added
              </div>
            </Link>
            <Link to={"my-list"}>
              <div className="nav-link text-decoration-none">My List</div>
            </Link>
          </Nav>
          <div className="d-flex align-items-center gap-3">
            <span>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Search For Movies"
                  onKeyDown={searchStringHandler}
                  onChange={searchStringHandler}
                  value={searchString}
                />
              </Form.Group>
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

export default MyNavbar
