// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다.
// 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(emergency) {
  // slice: 어떤 배열의 시작부터 끝까지에 대한 얕은 복사본을 새로운 배열 객체로 반환 / 원본은 바뀌지 않음
  // 배열을 복사한 다음 내림차순 정렬
  const sortArr = emergency.slice().sort((a, b) => b - a);
  // 원본 배열을 map 메서드로 반복 => 복사한 배열(내림차순 정렬된)의 i번째 인덱스에 +1한 값을 넣어줌
  // 즉, 가장 큰 숫자인 0번째 인덱스에 값1을 넣어줌
  return emergency.map((i) => sortArr.indexOf(i) + 1);
}
