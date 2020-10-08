import React from 'react';

// style 

const Square = ({ className }) => {
  // todo
  //const { size, alive } = props;

  // const size = 10; // todo
  // const style = {
  //   width: size,
  //   height: size,
  // }

  // if (alive) {
  //   style.backgroundColor = '#000'
  // } else {
  //   style.backgroundColor = '#FFF'
  // }

  return (
    <div 
      //style={style}
      className={className}
    />
  )
}

export default Square;
