import React, { Component } from "react"
import { Col, Container, Row } from "react-bootstrap"
import SingleMovieCard from "./SingleMovieCard"

class MovieGallery extends Component {
  state = {
    movie: [],
  }
  componentDidMount = () => {
    this.getMovieDetails()
  }
  getMovieDetails = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=a092ad98&s=" + this.props.movieTitle
      )
      if (response.ok) {
        const { Search } = await response.json()
        this.setState({
          movie: Search,
        })
        console.log(Search)
      }
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <Container fluid>
        <h3 className="text-capitalize mb-3">{this.props.movieTitle}</h3>
        <Row>
          {this.state.movie.map((m) => (
            <Col md={3} className="mb-2" key={m.imdbID}>
              <SingleMovieCard img={m.Poster} title={m.Title} year={m.Year} />
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}

export default MovieGallery
