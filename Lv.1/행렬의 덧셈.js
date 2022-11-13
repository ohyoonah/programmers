// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
// 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
// arr1	          arr2	         return
// [[1,2],[2,3]]	[[3,4],[5,6]]	 [[4,6],[7,9]]

function solution(arr1, arr2) {
  let arr = [];
  // arr1.length = arr2.length
  // [1,2], [2,3] => 2
  for (let i = 0; i < arr1.length; i++) {
    let result = [];
    // arr1배열 안의 인덱스만큼 순회
    // [1, 2] => 2
    for (let j = 0; j < arr1[i].length; j++) {
      // arr1과 arr2의 i번째 인덱스 안의 j번째 인덱스를 더해줌
      result.push(arr1[i][j] + arr2[i][j]);
    }
    // 결과 값을 빈 배열에 담아서 리턴
    arr.push(result);
  }
  return arr;
}
