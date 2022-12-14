// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
// 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
// n은 길이 10,000이하인 자연수입니다.

1;
function solution(n) {
  // 10000이하의 자연수이므로 대충 수박을 10000번 반복해줌
  // 지금 생각해보니 수박이 두 글자니까 5000만 반복해도 될듯?
  let str = "수박".repeat(10000);
  // substring 메서드로 0번째 인덱스부터 n번째 인덱스까지 반환
  return str.substring(0, n);
}

2;
// 다른 사람 풀이
const waterMelon = (n) => {
  // n의 절반만큼만 수박 반복
  // 홀수일 경우 수를 붙여줌
  return "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
};
