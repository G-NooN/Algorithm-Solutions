import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const array = input.split("\n").map(Number);

const arraySet = new Set(array);

switch (arraySet.size) {
  case 1:
    console.log("Fish At Constant Depth");
    break;
  case 2:
  case 3:
    console.log("No Fish");
    break;
  case 4:
    const targetArray = array.slice(0, -1);

    if (targetArray.every((value, index) => value < array[index + 1])) {
      console.log("Fish Rising");
    } else if (targetArray.every((value, index) => value > array[index + 1])) {
      console.log("Fish Diving");
    } else {
      console.log("No Fish");
    }
        
    break;
}
