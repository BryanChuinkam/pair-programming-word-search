const horizontalChecker = function(letters, word) {

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};


const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }

  if (word === null || word === undefined) {
    return false;
  }

  let checked = horizontalChecker(letters, word);
  if (checked) {
    return true;
  } else {
    // if word isn't found horizontally
    // create a new matrix with transposed columns and checking for the word

    let result = [];
    const rowsLength = letters.length;
    const columnsLength = letters[0].length;

    for (let y = 0; y < columnsLength; y++) {
      result[y] = [];
      for (let x = 0; x < rowsLength; x++) {
        result[y][x] = letters[x][y];
      }
    }
    return horizontalChecker(result, word);
  }

};

module.exports = wordSearch;