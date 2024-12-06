var fs = require('fs')
let arr = []
const regex = /\(!\)$/g;

fs.readFile('test3.txt', 'utf8', (err, data) => {
  let count = 0;
  let t = data.split('\r\n').forEach(line => {
    if (line === '') {
      count = 0
      return
    }
    if (count === 0) {
      arr.push([])
    }
    arr.at(-1).push(line);
    ++count

  })
  let g = arr.map(p => {

    return {
      q: p[0],
      a: p.slice(1).map(e => ({
        isTrue: regex.test(e),
        text: e.replace(regex,'').trim()
      }))
    }
  })
  fs.writeFile('data1.json', JSON.stringify(g), (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
    }
  })

});
