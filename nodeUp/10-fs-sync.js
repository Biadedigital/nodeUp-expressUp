const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync(`${__dirname}/content/first.txt`, 'utf8')
const second = readFileSync(`${__dirname}/content/second.txt`, 'utf8')

console.log(first, second)

writeFileSync(
  `${__dirname}/content/result.txt`,
  `this is the result: ${first}, ${second}`
)