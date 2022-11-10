// 머쓱이는 구슬을 친구들에게 나누어주려고 합니다.
// 구슬은 모두 다르게 생겼습니다.
// 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때,
// balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

function solution(balls, share) {
  let n = 1,
    m = 1,
    num = 1;
  for (let i = 1; i <= balls; i++) n *= i;
  for (let i = 1; i <= share; i++) m *= i;
  for (let i = 1; i <= balls - share; i++) num *= i;
  return n / (num * m);
}

// 일단 무식하게나마 풀어봄
// 하지만 예시 답안은 맞지만 테스트 결과 오답이 나옴
// balls와 share가 같은 경우 등등 추가적으로 고려할 사항이 있음

function solution(balls, share) {
  const [n, m] = [balls, share];
  // BigInt는 Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체
  const fact = [BigInt(1), BigInt(1)];

  for (let i = 2; i <= n; i++) fact[i] = fact[i - 1] * BigInt(i);

  return Number(fact[n] / (fact[n - m] * fact[m]));
}

const fact = (num) => (num === 0 ? 1 : num * fact(num - 1));

function solution(balls, share) {
  return Math.round(fact(balls) / (fact(balls - share) * fact(share)));
}
