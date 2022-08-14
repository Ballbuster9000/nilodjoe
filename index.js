const NILOD = require('nilod')
const fs = require('fs');

let model = new NILOD();

function printSentence(res) {
    console.log(`(${res.outputWords.length}) ${res.output}`);
}

fs.readFile('iy.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  model.train(data)
});
 
