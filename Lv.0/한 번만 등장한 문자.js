// 문자열 s가 매개변수로 주어집니다.
// s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
// 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

function solution(s) {
  // 빈 배열 생성
  let array = [];
  // 문자열 s를 배열 안에 나눠서 담아줌
  let new_s = s.split("");
  // 배열 new_s를 map 메서드로 반복
  new_s.map((i) => {
    // indexOf: string 객체에서 주어진 값과 일치하는 첫 번째 인덱스 반환 / 없으면 -1
    // lastIndexOf: 역순으로 탐색
    if (s.indexOf(i) === s.lastIndexOf(i)) {
      // 문자열이 처음 발견된 인덱스와 마지막에 발견된 인덱스의 값이 같으면 배열에 넣어줌
      // 즉, 중복이 있으면 값이 같을 수 없고 중복되지 않아야 처음과 끝 인덱스가 같을 수 있음
      array.push(i);
    }
  });
  // sort메서드로 사전순 정렬 후 join으로 하나의 문자열로 합침
  return array.sort().join("");
}
