// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

1;
function solution(arr, divisor) {
  // arr 배열의 각 요소를 divisor로 나눈 나머지가 0일 경우 i를 반환
  // 이 경우에는 나머지가 0이 아닐 경우 false값이 담김
  // filter 메서드로 false가 아닌 값만 돌려줌
  // sort 메서드로 오름차순 정렬
  let newArr = arr
    .map((i) => i % divisor === 0 && i)
    .filter((x) => x !== false)
    .sort((a, b) => a - b);
  // 빈 배열일 경우 [-1] 리턴
  if (newArr.length === 0) return [-1];
  return newArr;
}

2;
function solution(arr, divisor) {
  // 굳이 map 메서드를 사용하지 않아도 됨
  // 바로 filter로 나머지를 구하면 false 값이 담기지 않음
  const newArr = arr.filter((x) => x % divisor === 0).sort((a, b) => a - b);
  return newArr.length === 0 ? [-1] : newArr;
}
