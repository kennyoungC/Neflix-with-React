import React, { Component, useEffect, useState } from "react"
import { Col, Container, Row, Card, Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"

const DetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null)

  const params = useParams()
  console.log("PARAMS", params)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "http://www.omdbapi.com/?apikey=a092ad98&i=" + params.movieId
        )
        if (response.ok) {
          const movie = await response.json()
          console.log(movie)

          setMovieDetails(movie)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={9} lg={6}>
          {movieDetails && (
            <Card className=" bg-dark">
              <Card.Img variant="top" src={movieDetails.Poster} />
              <Card.Body>
                <Card.Title>{movieDetails.Title}</Card.Title>
                <p className="mb-0 fs-italic">Description:</p>
                <Card.Text>{movieDetails.Plot}</Card.Text>
                <p className="mb-0 ">
                  Genre(s): {Object.values(movieDetails.Genre)}.
                </p>
                <p className="mb-0 fs-italic">
                  Actors: {Object.values(movieDetails.Actors)}.
                </p>
                <span className="d-flex justify-content-between align-item-center">
                  <p className="mb-0 fs-italic">
                    Release Date: {movieDetails.Released}
                  </p>
                  <p className="mb-0 fs-italic">
                    IMBD Rating: {movieDetails.imdbRating}/10
                  </p>
                </span>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default DetailsPage
