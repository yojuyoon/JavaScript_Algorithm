function solution(s) {
  //풀이1.
  //   let result = "";
  //   for (let i in s) {
  //     if (s.length % 2 !== 0) {
  //       result = s[Math.floor(s.length / 2)];
  //     } else {
  //       result = s[s.length / 2 - 1] + s[s.length / 2];
  //     }
  //   }
  //   return result;
  // }

  //풀이2.
  let result = "";
  const mid = Math.floor(s.length / 2);

  if (s.length % 2 !== 0) result = s.substring(mid, mid + 1);
  else result = s.substring(mid - 1, mid + 1);

  return result;
}
let str = "study";
console.log(solution(str));
