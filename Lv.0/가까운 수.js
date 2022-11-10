// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

1;
function solution(array, n) {
  const newArr = array.slice().map((i) => Math.abs(i - n));
  const index = newArr.indexOf(Math.min(...newArr));
  return array[index];
}

// 이렇게 작성했을 경우 예시 답안과는 일치하지만 테스트 결과 오답 발생
// 이유는 배열 안에 절대값이 같은 경우도 존재하기 때문
// 절대값이 같다면 그 중에서 더 작은 수를 반환해야 함
// ex) -1, 1이 있다면 -1 반환

2;
function solution(array, n) {
  const newArr = array
    .sort((a, b) => a - b)
    .slice()
    .map((i) => Math.abs(i - n));
  const index = newArr.indexOf(Math.min(...newArr));
  return array[index];
}

// sort()로 먼저 오름차순으로 정렬해 줌 => 나중에 indexOf에서 가장 앞에서 발견되는 값을 찾을 것이기 때문!
// 그런 다음 slice로 새 배열을 복제한 다음 map으로 각 요소들을 n으로 뺀 값을 절대값으로 만들어 줌
// 새로 만든 배열의 가장 작은 값을 가진 인덱스를 변수에 담아줌
// 마지막으로 원래 배열에 그에 맞는 인덱스 값을 찾아 반환
