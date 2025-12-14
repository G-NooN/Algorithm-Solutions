const dateObj = new Date();
const [date] = dateObj.toISOString().split("T");

console.log(date);