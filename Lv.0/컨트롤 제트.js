// 숫자들이 공백으로 구분된 문자열이 주어집니다.
// 문자열에 있는 숫자를 차례대로 더하려고 합니다.
// 이 때 “Z”가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다.
// 숫자와 “Z”로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.
// s               result
// "1 2 Z 3"	     4
// "10 20 30 40"   100
// "10 Z 20 Z 1"	 1

function solution(s) {
  // 문자열 s를 공백을 기준으로 잘라 배열에 담아줌
  let arr = s.split(" ");
  // 배열에 Z가 포함될 때까지 반복
  // 배열 속 Z가 있는 인덱스에서 -1번째 인덱스와 Z가 들어있는 인덱스를 삭제
  while (arr.includes("Z")) arr.splice(arr.indexOf("Z") - 1, 2);
  // 배열의 요소를 정수로 변환
  // reduce 메서드로 배열의 합을 구함, 초깃값은 0
  return arr.map((i) => Number(i)).reduce((a, b) => a + b, 0);
}
