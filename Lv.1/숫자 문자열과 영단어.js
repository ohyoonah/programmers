// 네오와 프로도가 숫자놀이를 하고 있습니다.
// 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.
// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.
// 1478 → "one4seveneight"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

function solution(s) {
  // 숫자의 영단어를 배열에 담아줌
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < arr.length; i++) {
    // 문자열을 arr[i]를 기준으로 자르고 join할 때 i를 넣어줌
    // ex) arr[i] => one / i => 1
    // "one4seveneight" => ["", "4seveneight"] => "14seveneight"
    s = s.split(arr[i]).join(i);
  }
  // 문자열을 정수로 변환해서 반환
  return parseInt(s);
}
