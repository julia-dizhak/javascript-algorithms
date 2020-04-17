import React, { Component } from 'react';
import { moviesData } from "./utils/movies-data";
import MovieItem from './components/MovieItem';
import { Container, Row, Col } from 'react-bootstrap';

export default class MovieContent extends Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    }

    this.removeMovie = this.removeMovie.bind(this);
    this.addMovieToWillWatch = this.addMovieToWillWatch.bind(this);
  }

  removeMovie(movie) {
    const { movies } = this.state;
    const updatedMovies = movies.filter(item => item.id !== movie.id);
    this.setState({
      movies: updatedMovies
    })
  }

  addMovieToWillWatch(movie) {
    const { moviesWillWatch } = this.state;
    const updatedMoviesWillWatch = [
      ...moviesWillWatch,
      movie
    ];
    this.setState({
      moviesWillWatch: updatedMoviesWillWatch
    })
  }

  render() {
    //console.log('render', this.state, this)
    const { movies, moviesWillWatch } = this.state;

    return (
      <Container>
        <Row>
          <Col xs={9}>
            <Row>
              {movies.map(movie => {
                return (
                  <Col
                    key={movie.id}
                    xs={6}
                    mb={4}
                  >
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                    />
                  </Col>
                )
              })}
            </Row>
          </Col>
          <Col xs={3}>
            will watch: {moviesWillWatch.length}
          </Col>
        </Row>
      </Container>
    )
  }
}
