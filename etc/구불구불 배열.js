// 자연수 배열 [-1, 1, 2, 3, -5]를 [3, -5, 2, -1, 1]로 만들기
// [최대, 최소, 최대, 최소, ...]

function solution(n) {
  // 새로운 배열 생성
  let result = [];
  // 오름차순 정렬과 내림차순 정렬을 나눠줌
  // slice를 사용하는 이유는 얕은 복사를 진행해야 하기 때문
  // 사용하지 않으면 n 원본이 변경됨
  let asc = n.slice().sort((a, b) => a - b);
  let dsc = n.slice().sort((a, b) => b - a);
  for (let i = 0; i < n.length; i++) {
    // 빈 배열에 최댓값을 push
    result.push(dsc[i]);
    // 만약 빈 배열의 길이와 원래 배열의 길이가 같다면 빈 배열을 바로 반환
    if (result.length === n.length) return result;
    // 최댓값 다음 요소로 최솟값 push
    result.push(asc[i]);
    if (result.length === n.length) return result;
  }
  return result;
}

console.log(solution([5, 2, 7, 8, -2, 25, 25]));
// [5, 2, 7, 8, -2, 25, 25] => [25, -2, 25, 2, 8, 5, 7]
