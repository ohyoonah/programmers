// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

function solution(phone_number) {
  // 빈 문자열 생성
  let str = "";
  // 마지막 뒤 4자리는 보여질 것이므로 전체 길이에서 -4를 함
  for (let i = 1; i <= phone_number.length - 4; i++) {
    // 빈 문자열에 *를 채워줌
    str += "*";
  }
  // *가 채워진 문자열에 폰넘버 뒤에서 4자리를 붙여줌
  return (str += phone_number.slice(-4));
}

// 다른 사람 풀이

function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

// 한 줄로 깔끔하게 정리 가능
// for문을 사용하지 않아도 repeat으로 반복할 수 있음
