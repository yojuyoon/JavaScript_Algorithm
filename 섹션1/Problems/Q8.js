function solution(answer) {
  let sum = answer.reduce((a, b) => a + b);
  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = i + 1; j < answer.length; j++) {
      if (sum - (answer[i] + answer[j]) == 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  return answer;
}
let array = [20, 7, 23, 19, 10, 15, 25, 8, 13];
let array2 = [10, 12, 8, 50, 10, 32, 23, 7, 10];
console.log(solution(array2));
