let letters = 'abcdefghijklmnopqrstuvwxyz'
function alphabetPosition(text) {
    let result = []
    for (let i = 0; i < text.length; i++) {
        let answer = letters.indexOf(text[i]) + 1
        result.push(answer)
    }
    return result
}
console.log(alphabetPosition('developer'));
console.log(alphabetPosition('decadev'));
console.log(alphabetPosition('success'));

module.exports = alphabetPosition
  