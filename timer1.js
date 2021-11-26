//takes in numbers from the console and creates an alert sound in seconds based on this input

const scheduleBeep = function(time) {
  let newTime = Number(time);
  if (isNaN(newTime) || newTime <= 0) {
    return;
  }

  setTimeout(() => {
    process.stdout.write('\x07');
    console.log("beep", newTime);
  }, newTime * 100);
};

const times = process.argv.slice(2);

for (const time of times) {
  scheduleBeep(time);
}

console.log();