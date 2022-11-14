// 자연수 n이 매개변수로 주어집니다.
// n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
// n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
// 45	        1200	    0021	           7

function solution(n) {
  // 정수 n을 3진법으로 변환한 문자열로 바꿈
  // split으로 각 문자마다 나눈 후 reverse로 반전시킴
  // join으로 다시 하나의 문자열로 합침
  n = n.toString(3).split("").reverse().join("");
  // parseInt로 3진법 n을 10진수로 변환한 값을 반환
  return parseInt(n, 3);
}
