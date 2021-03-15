function solution(s) {
  //풀이1.
  // let str = "";
  // for (let i of s) {
  //   if (i.toLowerCase() === i) {
  //     str += i.toUpperCase();
  //   } else {
  //     str += i.toLowerCase();
  //   }
  // }
  // return str;

  //풀이2.
  for (let i of s) {
    s = s.replace(i, i.toLowerCase() === i ? i.toUpperCase() : i.toLowerCase());
  }
  return s;
}

console.log(solution("StuDY"));
