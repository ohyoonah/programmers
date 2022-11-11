// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

function solution(s) {
  return (s.length === 4 || s.length === 6) && Number(s) ? true : false;
}
// 이렇게 작성했을 경우 테스트 몇 개에서 오답처리
// 지수를 고려해야 함 => ex) 1e10과 같은 e..
// Number는 e를 숫자로 인식함

function solution(s) {
  // 문자열을 먼저 paseInt로 변환해 줌
  let num = parseInt(s);
  // 변환한 문자가 원본 문자열과 일치하는지 확인
  // 문자열과 숫자를 비교할 것이므로 == 동등연산자 사용
  return (s.length === 4 || s.length === 6) && num == s ? true : false;
}
