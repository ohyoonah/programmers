// 배열 arr가 주어집니다.
// 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다.
// 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
// 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다.
// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.

1;
function solution(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // 배열 arr의 i번째 인덱스가 arr의 i + 1번째 인덱스와 같지 않으면 (중복이 아니면)
    // 빈 배열 newArr에 해당 요소의 값을 추가해 줌
    if (arr[i] !== arr[i + 1]) newArr.push(arr[i]);
  }
  return newArr;
}

2;
// 다른 사람 풀이
function solution(arr) {
  // filter 메서드로 한 줄 작성
  return arr.filter((val, index) => val != arr[index + 1]);
}
