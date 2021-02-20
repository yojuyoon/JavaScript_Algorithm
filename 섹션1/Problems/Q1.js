function solution(a, b, c) {
  let answer;
  a > b ? (answer = b) : (answer = a);
  answer > c && (answer = c);
  return answer;
}
console.log(solution(6, 2, 100));
