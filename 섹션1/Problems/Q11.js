function solution(s) {
  //풀이1.
  const regex = /[A-Z]/g;
  return s.match(regex).length;
}
const str = "KoreanTimeGood";
console.log(solution(str));
