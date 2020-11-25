const emojis = require("./emojis");


const translateWord = function (word) {
    for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i]) {
        return word
    }
  }
}


module.exports = translateWord;


