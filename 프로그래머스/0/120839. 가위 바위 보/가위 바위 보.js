function solution(rsp) {
  const result = [...rsp].map((value) => {
    switch (value) {
      case "2":
        return "0";
      case "0":
        return "5";
      case "5":
        return "2";
    }
  });

  return result.join("");
}