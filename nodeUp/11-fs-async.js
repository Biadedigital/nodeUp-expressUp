const { readFileSync, writeFileSync } = require('fs');

readFileSync(
  `${__dirname}/content/first.txt`, 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const first = result

    readFileSync(`${__dirname}/content/second.txt`, 'utf8', (err, result) => {
      if (err) {
        console.log(err)
        return
      }
      const second = result
    })
    writeFileSync(
      `${__dirname}/content/result.txt`,
      `this is the result: ${first}, ${second}`, (err, result) => {
        if (err) {
          console.log(err)
          return
        }
      }
    )
})