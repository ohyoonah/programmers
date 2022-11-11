// 길이가 같은 배열 A, B 두개가 있습니다.
// 각 배열은 자연수로 이루어져 있습니다.
// 배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱합니다.
// 이러한 과정을 배열의 길이만큼 반복하며, 두 수를 곱한 값을 누적하여 더합니다.
// 이때 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다.
// (단, 각 배열에서 k번째 숫자를 뽑았다면 다음에 k번째 숫자는 다시 뽑을 수 없습니다.)

1;
function solution(A, B) {
  let result = 0;
  // 둘의 곱 중 최솟값을 구하기 위해서는 가장 작은 수와 가장 큰 수가 곱해져야 함
  // A 배열은 오름차순, B 배열은 내림차순 정렬
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);
  // A의 가장 작은 값과 B의 가장 큰 값을 곱 해서 result에 담음
  for (let i = 0; i < A.length; i++) result += A[i] * B[i];
  return result;
}

2;
// 다른 사람 풀이
function solution(A, B) {
  // 굳이 A = B = 다시 정의 안 해도 되는 듯
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  // reduce 메서드 사용
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}
