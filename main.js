const translateWord = require('./translate-word.js');
const encodeWord = require('./encode-word.js')


const getInput = process.argv.slice[2]

const symbols = function(input) {
    getInput.map(encodeWord).join('')
}

console.log(symbols)

