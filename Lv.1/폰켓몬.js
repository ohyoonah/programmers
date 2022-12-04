// 당신은 폰켓몬을 잡기 위한 오랜 여행 끝에, 홍 박사님의 연구실에 도착했습니다.
// 홍 박사님은 당신에게 자신의 연구실에 있는 총 N 마리의 폰켓몬 중에서 N/2마리를 가져가도 좋다고 했습니다.
// 홍 박사님 연구실의 폰켓몬은 종류에 따라 번호를 붙여 구분합니다.
// 따라서 같은 종류의 폰켓몬은 같은 번호를 가지고 있습니다.
// 예를 들어 연구실에 총 4마리의 폰켓몬이 있고, 각 폰켓몬의 종류 번호가 [3번, 1번, 2번, 3번]이라면 이는 3번 폰켓몬 두 마리, 1번 폰켓몬 한 마리, 2번 폰켓몬 한 마리가 있음을 나타냅니다.
// nums	          result
// [3,1,2,3]	      2
// [3,3,3,2,2,4]	  3
// [3,3,3,2,2,2]	  2

function solution(nums) {
  // Set을 사용해서 배열의 중복을 제거한 뒤 길이 구함
  const arr = [...new Set(nums)].length;
  // 배열의 길이 / 2의 값이 arr보다 클 경우 arr 반환
  // 작거나 같을 경우 배열의 길이 / 2 반환
  return nums.length / 2 > arr ? arr : nums.length / 2;
}

function solution(nums) {
  // size를 사용하면 배열로 변환을 해주지 않고도 길이를 구할 수 있음
  const arr = new Set(nums).size;
  return nums.length / 2 > arr ? arr : nums.length / 2;
}
