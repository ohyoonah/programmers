// 정수 배열 num_list와 정수 n이 매개변수로 주어집니다.
// num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.
// num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다.
// 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.

function solution(num_list, n) {
  let arr = [];
  // i는 i + n씩 증가
  for (let i = 0; i < num_list.length; i += n) {
    // num_list의 i번째 인덱스부터 i + n - 1번째 인덱스까지 빈 배열에 삽입
    // slice를 하면 배열로 반환되므로 배열에 배열을 넣는 형태가 됨 => 2차원 배열
    arr.push(num_list.slice(i, i + n));
  }
  return arr;
}
