import React from 'react';

const Square = props => {
  const { size, alive } = props;

  const style = {
    width: size,
    height: size,
  }

  if (alive) {
    style.backgroundColor = '#000'
  } else {
    style.backgroundColor = '#FFF'
  }

  return (
    <div 
      style={style}
    />
  )
}

export default Square;
