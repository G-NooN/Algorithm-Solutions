const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const [, ...values] = input.split("\n");

let count = 0;

const solution = () => {
  values.forEach((value) => {
    let continuous = true;
    const alphabets = [value[0]];

    for (let i = 1; i < value.length; i++) {
      if (value[i] === value[i - 1]) continue;
      if (alphabets.includes(value[i])) {
        continuous = false;
        break;
      } else {
        alphabets.push(value[i]);
        continue;
      }
    }

    if (continuous) {
      count++;
    }
  });

  console.log(count);
};

solution();