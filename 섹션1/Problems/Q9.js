function solution(s) {
  return s.includes("A") && s.replaceAll("A", "#");
}
let str = "BANANA";
let str2 = "PAPAYA";
console.log(solution(str2));
