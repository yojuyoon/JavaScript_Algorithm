function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i in arr) {
    arr[i] < min && (min = arr[i]);
  }
  return (answer = min);
}
let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
