function solution(arr) {
  //나의 풀이
  const odd = arr.filter((num) => num % 2 === 1);
  let sum = odd.reduce((num, curr) => {
    return num + curr;
  });
  let min = Math.min(...odd);
  //let min = Math.min.apply(null, arr)

  //강의 풀이
  // let sum = 0,
  //   min = Number.MAX_SAFE_INTEGER;
  // for (let x of arr) {
  //   if (x % 2 === 1) {
  //     sum += x;
  //     min = x;
  //   }
  // }
  return [sum, min];
}
arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
