const [date] = new Date().toISOString().split("T");

console.log(date.split("-").join("\n"));