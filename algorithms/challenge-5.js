function accum(str) {
  let acc = ''
  for (let i = 0; i < str.length; i++) {
    acc += str[i].toUpperCase()
    for (let j = 0; j < i; j++) {
      acc += str[i].toLowerCase()
    }
  }
  return acc
}
module.exports = accum

console.log(accum('abcd'))
console.log(accum('RqaEzty'))
console.log(accum('cwAt'))
