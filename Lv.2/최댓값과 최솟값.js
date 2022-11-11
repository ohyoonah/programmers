// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다.
// str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
// 예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

function solution(s) {
  // 기존 문자열을 공백을 기준으로 나눠 배열을 만들고 오름차순으로 정렬
  s = s.split(" ").sort();
  // 문자도 min max 가능
  // 배열 s의 최솟값과 최댓값 사이에 공백도 넣어서 문자열 리턴
  return `${Math.min(...s)} ${Math.max(...s)}`;
}

// 지금 보니 최솟값 최댓값을 max min이 구해주니 sort 정렬은 필요 없을 듯

function solution(s) {
  s = s.split(" ");
  return `${Math.min(...s)} ${Math.max(...s)}`;
}
