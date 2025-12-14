const dateObj = new Date();
const [year, month, date] = [
  dateObj.getUTCFullYear(),
  dateObj.getUTCMonth() + 1,
  dateObj.getUTCDate(),
];

console.log(`${year}-${month}-${date}`);