// 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

function solution(common) {
  // 배열의(1번 인덱스 - 0번 인덱스) 값이 (2번 인덱스 - 1번 인덱스)와 같다면 등차수열
  return common[1] - common[0] === common[2] - common[1]
    ? // 등차수열 => 배열의 마지막 요소 + 차
      common[common.length - 1] + (common[1] - common[0])
    : // 등비수열 => 배열의 마지막 요소 * 1번 인덱스를 0번 인덱스로 나눈 값
      common[common.length - 1] * (common[1] / common[0]);
}
