function defineAnagrams(str1, str2) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new Error('defineAnagrams requires two strings to be passed');
  }

  if ( str1 === '' || str2 === '') return 'empty strings';

  const len1 = str1.length;
  const len2 = str2.length;
  let obj = {}; // hash

  if (len1 !== len2) return false;

  if (len1 === len2) {
    const normalizedStr1 = str1.replace(/[^A-Za-z]+/g, '').toLowerCase();
    const normalizedStr2 = str2.replace(/[^A-Za-z]+/g, '').toLowerCase();

    for (let i = 0; i < len1; i++) {
      const index = normalizedStr1.charCodeAt(i)-97;
      obj[index] = (obj[index] || 0) + 1;
     }

    for (let j = 0; j < len2; j++) {
      const index = normalizedStr2.charCodeAt(j)-97;
      if (!obj[index]) return false;
      else {
        obj[index]--;
      }
    }

    const isStringAnagram = Object.values(obj).every(val => val === 0);
    return isStringAnagram;
  }
}

export { defineAnagrams, func }
