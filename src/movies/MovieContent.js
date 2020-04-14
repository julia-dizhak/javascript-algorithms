import React, { Component, Fragment } from 'react';
import { moviesData } from "./utils/movies-data";
import MovieItem from './components/MovieItem';

export default class MovieContent extends Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData
    }

    this.removeMovie = this.removeMovie.bind(this)
  }

  removeMovie(movie) {
    const { movies } = this.state;
    const updatedMovies = movies.filter(item => item.id !== movie.id);
    this.setState({
      movies: updatedMovies
    })
  }

  render() {
    console.log('render', this.state, this)
    const { movies } = this.state;

    return (
      <Fragment>
        {movies.map(movie => {
          return (
            <MovieItem
              key={movie.id}
              movie={movie}
              removeMovie={this.removeMovie}
            />
          )
        })}
      </Fragment>
    )
  }
}
