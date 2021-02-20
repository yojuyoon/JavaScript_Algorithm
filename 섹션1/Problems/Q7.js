function solution(day, arr) {
  return arr.filter((car) => car % 10 === day).length;
}
arr = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr));
