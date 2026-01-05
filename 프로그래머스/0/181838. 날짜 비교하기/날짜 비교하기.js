function solution(date1, date2) {
  const getFullDate = (date) => {
    const [year, month, day] = date.map(String);
    return Number(
      `${year.padStart(4, "0")}${month.padStart(2, "0")}${day.padStart(2, "0")}`
    );
  };

  return Number(getFullDate(date1) < getFullDate(date2));
}