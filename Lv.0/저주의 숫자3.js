// 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다.
// 3x 마을 사람들의 숫자는 다음과 같습니다.
// 10진법	  3x 마을에서 쓰는 숫자	  10진법	3x 마을에서 쓰는 숫자
// 1	      1                      6	     8
// 2	      2	                     7	     10
// 3	      4	                     8	     11
// 4	      5	                     9	     14
// 5	      7	                     10	     16

function solution(n) {
  let result = 0;
  // 1부터 n까지 반복
  for (let i = 1; i <= n; i++) {
    // result를 증가시킴
    result++;
    // 3의 배수이거나 3이 포함될 경우
    while (result % 3 === 0 || String(result).includes("3")) {
      // result 값 증가시킴
      result++;
    }
  }
  return result;
}
