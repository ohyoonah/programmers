// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

1;
function solution(s) {
  return s.length % 2 === 1
    ? s[Math.floor(s.length / 2)]
    : s.slice(s.length / 2 - 1, s.length / 2 + 1);
}
// 문자열의 길이가 홀수이면 문자길이를 반으로 나눈 몫 값의 인덱스를 반환
// 짝수일 경우 slice메서드로 반으로 나눈 값에 -1을 한 인덱스 부터 +1을 한 인덱스까지 (두 글자)반환

2;
// 다른 사람 풀이
function solution(s) {
  // str.substr(start[, length])
  // substr 메서드로 시작 인덱스 정의
  // 몇 자를 반환할 지에 대해서 홀수, 짝수 구분
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
