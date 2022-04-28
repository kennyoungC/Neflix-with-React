import React, { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import SingleMovieCard from "./SingleMovieCard"

const MovieGallery = (props) => {
  // state = {
  //   movie: [],
  // }
  const [movie, setMovie] = useState([])

  // componentDidMount = () => {
  //   this.getMovieDetails()
  // }
  useEffect(() => {
    getMovieDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const getMovieDetails = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=a092ad98&s=" + props.movieTitle
      )
      if (response.ok) {
        const { Search } = await response.json()
        // this.setState({
        //   movie: Search,
        // })
        setMovie(Search)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container fluid>
      <h3 className="text-capitalize mb-3">{props.movieTitle}</h3>
      <Row>
        {movie.map((m) => (
          <Col sm={4} md={3} lg={2} className="mb-2" key={m.imdbID}>
            <SingleMovieCard
              img={m.Poster}
              title={m.Title}
              year={m.Year}
              id={m.imdbID}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default MovieGallery
