function accum(str) {
  let acc = ''
  let acc2 = ''
  for (let i = 0; i < str.length; i++) {
    acc2 = str[i].toUpperCase();
    acc += `${acc2} ${str[i].repeat(i + 1).slice(1).padEnd(i + 2, '_')}`;
  }
  return acc.trim()
}
module.exports = accum

console.log(accum('abcd'))
console.log(accum('RqaEzty'))
console.log(accum('cwAt'))
