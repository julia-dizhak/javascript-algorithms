/**
 * You are given a string containing characters A and B only.
 * Your task is to change it into a string such that there are no matching adjacent characters.
 *  To do this, you are allowed to delete zero or more characters in the string.
 *
*/

function alternatingCharacters(s) {
  let arr = s.split('');
  const len = arr.length - 1;
  let deletions = 0;


  for (let index = 0; index < len; index++) {
    if (arr[index] === arr[index + 1]) {
      deletions++;
    }
  }

  return deletions;
}

function alternatingCharactersVariant1(s) {
  let deletions = 0;

  s.split('').map((char, i) => {
    if (char[i] === char[i+1]) deletions++;
    return deletions;
  })
}

export { alternatingCharacters, alternatingCharactersVariant1 }
