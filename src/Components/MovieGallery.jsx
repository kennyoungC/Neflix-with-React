import React, { Component } from "react"
import { Container } from "react-bootstrap"
import SingleMovieCard from "./SingleMovieCard"

class MovieGallery extends Component {
  state = {
    movie: [],
  }
  componentDidMount = () => {
    this.getMovieDetails()
  }
  getMovieDetails = async () => {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=a092ad98&s=harry potter"
    )
    const { Search } = await response.json()
    this.setState(() => {
      movie: Search
    })
    // console.log(Search)
  }
  render() {
    return (
      <Container fluid>
        <SingleMovieCard />
      </Container>
    )
  }
}

export default MovieGallery
