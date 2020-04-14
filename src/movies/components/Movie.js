import React from 'react';

const Image= (props) => {
  const { data: { title, image } } = props;

  return (
    <div>
      <img
        src={image}
        alt={title}
      />
    </div>
  )
}

const Movie = (props) => {
  const { data: { title, vote_average, image, overview } } = props;

  return (
    <div>
      <Image src={image} alt={title} />
      <p>{title}</p>
      <p>{vote_average}</p>
      <button
        type="button">
          delete movie
      </button>
    </div>
  )
}

export default Movie;
