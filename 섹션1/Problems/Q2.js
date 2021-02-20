function solution(a, b, c) {
  let answer = "YES";
  let max;
  let sum = a + b + c;
  a > b ? (max = a) : (max = b);
  c > max && (max = c);
  sum - max <= max && (answer = "No");

  //배열로 접근한 풀이
  // let arr = [a, b, c];
  // arr.splice(arr.indexOf(max), 1);
  // for (let i in arr) {
  //   max > arr[0] + arr[1] ? (answer = "No") : answer;
  // }
  return answer;
}
console.log(solution(13, 33, 17));
