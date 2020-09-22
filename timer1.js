let input = process.argv.slice(2);
let time = 0

const timer = times => {
  for (let time of times) {
    if (time > 0 && !isNaN(time)) {
      setTimeout (() => process.stdout.write('\x07'), time * 1000)
    }
  }
}
setTimeout (() => {
  console.log('');
})

timer(input);





