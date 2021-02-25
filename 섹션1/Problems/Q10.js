function solution(s, t) {
  //풀이1.
  let result = 0;
  for (let i in s) {
    if (s[i].includes(t)) {
      result++;
    }
  }
  return result;
  //풀이2.
  // let result = s.split(t).length;
  // return result - 1;
}
let s = "COMPUTERPROGRAMMING";
let t = "R";
console.log(solution(s, t));
