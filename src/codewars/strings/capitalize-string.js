const testStr = 'The quick brown fox jumps over the lazy dogs';

const capitalizeStr = testStr.split(' ')
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(' ');

//console.log('capitalizeStr = ', capitalizeStr);
