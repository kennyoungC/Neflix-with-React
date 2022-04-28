import React, { Component } from "react"
import { Col, Container, Row } from "react-bootstrap"

const NotFound = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <div className="text-center">
            <h1>404 ERROR!!!</h1>
            <p>The page you are looking is Unavailable!!!</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
