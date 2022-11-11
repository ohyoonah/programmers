// i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다.
// 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다.
// 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

function solution(n) {
  let result = 1;
  // 최대 10!까지 계산할 수 있으므로 조건으로 10까지를 넣어줌
  for (let i = 1; i <= 10; i++) {
    // 1 * 1 * 2 * 3 * ... * 10
    result *= i;
    // 결과값이 n과 같으면 그대로 i를 반환
    if (result === n) return i;
    // 결과값이 n보다 크다면 현재 진행중인 i의 -1한 숫자를 반환
    if (result > n) return i - 1;
  }
}
