// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다.
// 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때,
// 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.
// dots	                                result
// [[1, 1], [2, 1], [2, 2], [1, 2]]	    1
// [[-1, -1], [1, 1], [1, -1], [-1, 1]]	4

function solution(dots) {
  // x와 y값을 넣을 빈 배열 두 개 생성
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < 4; i++) {
    // x값은 arr1 배열에 넣고, y값은 arr2 배열에 넣음
    arr1.push(dots[i][0]);
    arr2.push(dots[i][1]);
  }
  return (
    // x값 중 가장 큰 값에서 가장 작은 값을 뺀 결과와 y값 중 가장 큰 값에서 가장 작은 값을 뺀 결과를 곱해서 반환
    (Math.max(...arr1) - Math.min(...arr1)) *
    (Math.max(...arr2) - Math.min(...arr2))
  );
}
