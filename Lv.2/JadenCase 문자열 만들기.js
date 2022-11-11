// JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다.
// 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다.
// 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.
// "3people unFollowed me"

function solution(s) {
  return (
    s
      // 전체 문자를 소문자로 변환
      .toLowerCase()
      // 공백을 기준으로 나눔
      .split(" ")
      // ["3people","unFollowed","me"]
      // substring으로 0번째 인덱스에서 1 - 1번째 (0번 인덱스 즉, 0번 인덱스 하나만)까지 문자열 선택
      // 0번째 인덱스 문자열 대문자로 변환
      // 대문자 뒤에 1번 인덱스부터 마지막까지의 문자를 합쳐줌
      .map((i) => i.substring(0, 1).toUpperCase() + i.substring(1))
      // 공백을 두고 문자열을 합침
      .join(" ")
  );
}
