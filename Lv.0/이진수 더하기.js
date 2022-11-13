// 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.
// bin1	bin2	result
// "10"	"11"	"101"

1;
function solution(bin1, bin2) {
  let arr = [];
  let result = 0;
  // 2진수는 0에서 15까지를 네 자릿수로 나타낼 수 있기 때문에 0 - 15까지 순회
  for (let i = 0; i < 16; i++) {
    // 정수 i를 2진수로 변환해서 배열에 넣어줌
    arr.push(i.toString(2));
  }
  // 문자열 bin1과 일치하는 인덱스와 bin2와 일치하는 인덱스를 합한 값을 result에 넣어줌
  result = arr.indexOf(bin1) + arr.indexOf(bin2);
  // 정수 result를 다시 이진수로 변환한 문자열로 반환해줌
  return result.toString(2);
}
// 이렇게 할 경우 예시 답안과는 일치하지만 테스트에서 오답 처리됨

2;
function solution(bin1, bin2) {
  // toString(2)와 같이 2진수 문자열로 변환할 수 있듯이, parseInt(문자열, 문자열이 2진수면 2)로도 변환 가능
  // 2진수 문자열 bin1과 bin2를 10진수로 변환한 값을 result에 넣어줌
  let result = parseInt(bin1, 2) + parseInt(bin2, 2);
  // 10진수 정수 result를 다시 2진수 문자열로 변환해서 반환해줌
  return result.toString(2);
}
