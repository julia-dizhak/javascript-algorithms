import React from 'react';

const MovieItem = (props) => {
  const { movie, removeMovie } = props;
  const { title,  } = props.movie;

  return (
    <div>
      <p>{title}</p>
      <button
        type="button"
        onClick={removeMovie.bind(null, movie)}>
          delete movie
      </button>
    </div>
  )
 }

export default MovieItem;
