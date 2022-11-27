// 정수 배열 numbers가 주어집니다.
// numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
// numbers	      result
// [2,1,3,4,1]	  [2,3,4,5,6,7]
// [5,0,2,7]	    [2,5,7,9,12]

function solution(numbers) {
  // Set을 이용해서 배열에 중복이 없도록 함
  let arr = new Set();
  for (let i = 0; i < numbers.length; i++) {
    // 자기 자신과의 합은 구하지 않을 거기 때문에 j의 초기값을 i + 1로 설정
    for (let j = i + 1; j < numbers.length; j++) {
      // numbers[i] 원소와 [j] 원소를 더한 값을 arr에 넣어줌
      arr.add(numbers[i] + numbers[j]);
    }
  }
  // 배열로 반환한 arr를 오름차순 정렬해줌
  return [...arr].sort((a, b) => a - b);
}
