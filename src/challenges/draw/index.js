import React, { useEffect, Component, createRef } from 'react';

// export default function DrawCanvas() {
//   const updateCanvas = () => {
//     if (canvas.getContext) {
//       const ctx = refs.canvas.getContext('2d');

//       // ctx.fillStyle = 'rgb(200, 0, 0)';
//       // ctx.fillRect(10, 10, 50, 50);

//       // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
//       // ctx.fillRect(30, 30, 50, 50);

//       ctx.fillRect(25, 25, 100, 100);
//       ctx.clearRect(45, 45, 60, 60);
//       ctx.strokeRect(50, 50, 50, 50);
//     } else {
//       // canvas-unsupported code here
//     }
//   }

//   useEffect(() => {
//     updateCanvas();
//   });

//   return (
//     <>
//       <div ref="canvas" width={300} height={300}></div>
//     </>  
//   )
// }

export default class DrawCanvas extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = createRef();
  }

  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas()
  }

  updateCanvas() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      const ctx = this.canvasRef.getContext('2d');

      // ctx.fillStyle = 'rgb(200, 0, 0)';
      // ctx.fillRect(10, 10, 50, 50);

      // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
      // ctx.fillRect(30, 30, 50, 50);

      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
    } else {
     // canvas-unsupported code here
    }
  }

  render() {
    return (
      <>
        <div id="canvas" ref={this.canvasRef} width={300} height={300}></div>
      </>
    );
  }
}
