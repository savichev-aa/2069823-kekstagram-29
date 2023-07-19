// Первая функция

function stringLenght(string, lenght) {
  if (string.length <= lenght) {
    return true;
  }
    return false;
}

// Вторая функция

function polidrom (word) {
  // Первый способ

  // let word2 = word.split('');
  // word2 = word2.reverse();
  // word2 = word2.join('');

  // Второй способ
  let word2 = [];
  for (i = 0; i < word.length; i++) {
    word2[i] = word[i]
}
  word2 = word2.reverse();
  word2 = word2.join('');

 if (word === word2) {
  return true
 }
  return false
}

console.log(polidrom('топот'))

// Третья функция


