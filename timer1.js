//takes in numbers from the console and creates an alert sound in seconds based on this input

const times = process.argv.slice(2);

for (let time of times) {
  let newTime = Number(time);
  if (typeof newTime === "number" && newTime > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, newTime * 100);
  }
}
console.log();