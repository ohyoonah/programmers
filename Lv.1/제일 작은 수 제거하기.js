// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

1;
function solution(arr) {
  // slice로 배열을 복제하고, sort로 오름차순 정렬
  let newArr = arr.slice().sort((a, b) => a - b);
  // 새로운 배열의 길이가 1이면 [-1] 반환
  // 아니면 기존 배열에서 새로운 배열의 0번째 인덱스(최소값)와 일치하지 않은 요소만 반환
  return newArr.length === 1 ? [-1] : arr.filter((i) => newArr[0] !== i);
}

2;
// 다른 사람 풀이

function solution(arr) {
  // 기존 배열에서 splice로 해당 요소를 삭제
  // 배열의 인덱스값이 최소값일 경우 인덱스 하나 삭제
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  // 배열의 길이가 0일 경우 [-1]을 반환하고 아닐 경우 기존 배열 반환
  return arr.length === 0 ? [-1] : arr;
}
