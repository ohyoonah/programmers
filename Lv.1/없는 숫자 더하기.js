// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  // 0-9의 합 45에서 배열의 합을 빼줌
  return 45 - numbers.reduce((a, b) => a + b);
}

// 숫자가 커질 경우 for문으로 sum을 만들어서 계산하면 됨
function solution(numbers) {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += i;
  }
  return sum - numbers.reduce((a, b) => a + b);
}
