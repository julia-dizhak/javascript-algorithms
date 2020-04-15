/**
 * The girl jumps from one cloud to another, but wants to avoid the thunder clouds:
 * jumps types available = 1 space jump or 2 spaces jump
 * c = array of clouds container 1 or 0
 * 0 = regular cloud
 * 1 = thunder cloud
 */
function jumpOnClouds(c) {
  const len = c.length;
  let jumps = 0;

  for (let i = 0; i < len; i++) {
    let nextStep = c[i+1];
    let next2Step = c[i+2];

    if (c[i] === 1) {
      i += 1
    } else {
      if (nextStep === 0 && next2Step === 0) {
        jumps += 2;
        i = i + 2;
      } else {
        jumps += 1;
        i += 1
      }
    }
  }

  return jumps;
}

export { jumpOnClouds }

