import React, { Component } from 'react';
//import { moviesData } from "./utils/movies-data";
import MovieItem from './components/MovieItem';
import { Container, Row, Col } from 'react-bootstrap';

export default class MovieContent extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: []
    }

    this.removeMovie = this.removeMovie.bind(this);
    this.addMovieToWillWatch = this.addMovieToWillWatch.bind(this);
    this.removeMovieFromWillWatch = this.removeMovieFromWillWatch.bind(this);
  }

  componentDidMount() {
    const API_KEY = '3f4ca4f3a9750da53450646ced312397';
    const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
    fetch(`${API_URL}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log('data', data)
        this.setState({
          movies: data.results
        })
      })
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

  removeMovieFromWillWatch(movie) {
    const { moviesWillWatch } = this.state;
    const updatedMoviesWillWatch = moviesWillWatch.filter(item => item.id !== movie.id);
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
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
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
