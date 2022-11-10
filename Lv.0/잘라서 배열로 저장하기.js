// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(my_str, n) {
  // 빈 배열 생성
  let newArr = [];
  // 문자열의 길이를 n으로 나눈만큼 반복
  for (let i = 0; i < my_str.length / n; i++) {
    // i * n부터 i * n + n까지 잘라서 새 배열에 넣어줌
    newArr.push(my_str.slice(i * n, i * n + n));
  }
  return newArr;
}
