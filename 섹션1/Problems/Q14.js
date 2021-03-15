function solution(arr) {
  //풀이1.
  // let str = "";
  // let arrLen = arr.map((str, i) => {
  //   return str.length;
  // });
  // console.log(arrLen);
  // let result = arrLen.filter((el, i) => el !== undefined);

  // let max = result.reduce((a, b) => {
  //   return Math.max(a, b);
  // });

  // for (let s of arr) {
  //   if (s.length === max) str = i;
  // }
  // return str;

  //풀이2.
  let max = arr[1];
  for (let i = 1; i < arr.length - 1; i++) {
    if (max.length < arr[i + 1].length) {
      max = arr[i + 1];
    }
  }
  return max;
}
let a = [5, "teacher", "time", "studenteeeeeee", "beautiful", "good"];
console.log(solution(a));
