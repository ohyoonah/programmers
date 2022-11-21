// 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다.
// 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다.
// 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.
// numlist	                       n	  result
// [1, 2, 3, 4, 5, 6]	             4	  [4, 5, 3, 6, 2, 1]
// [10000,20,36,47,40,6,10,7000]	 30	  [36, 40, 20, 47, 10, 6, 7000, 10000]

1;
function solution(numlist, n) {
  // numlist 배열 정렬
  return numlist.sort((a, b) => {
    // 요소에서 n을 뺀 값을 절댓값으로 만들어서 배열에 넣어줌
    const [aList, bList] = [Math.abs(a - n), Math.abs(b - n)];
    // 만약 배열의 요소가 같다면 내림차순 정렬
    if (aList === bList) return b - a;
    // 같지 않다면 aList에서 bList를 뺌
    return aList - bList;
  });
}

2;
function solution(numlist, n) {
  // 한 줄로 간단히 정리
  // if문 대신 || 연산자로 구분해줌
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}
