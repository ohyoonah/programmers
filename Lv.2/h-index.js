// H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다.
// 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다.
// 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.
// 어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.
// 어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.
// citations	      return
// [3, 0, 6, 1, 5]	3

function solution(citations) {
  // 배열을 내림차순 정렬 => [6, 5, 3, 1, 0]
  citations.sort((a, b) => b - a);
  let i = 0;
  // i + 1보다 요소가 크거나 같을 때까지 반복
  // 0 + 1 = 1 => citations[0] = 6
  // 1 + 1 = 2 => citations[1] = 5
  // 2 + 1 = 3 => citations[2] = 3
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;
}
