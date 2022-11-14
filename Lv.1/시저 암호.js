// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다.
// "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
// 공백은 아무리 밀어도 공백입니다.

1;
function solution(s, n) {
  // 문자열 s를 하나씩 나누고 배열로 만들어 준 다음 map으로 순회하면서 각 요소들을 아스키코드 + n을 한 값으로 만들어줌
  let result = s.split("").map((i) => i.charCodeAt() + n);
  let string = "";
  for (let i = 0; i < result.length; i++) {
    // a-z(97-122) => 값이 122이상이라면 값에 -26을 해줌
    // z + 1 => a로 돌아가야하기 때문
    if (result[i] > 122) result[i] -= 26;
    // 마찬가지로 대문자도 같은 조건을 줌
    if (result[i] < 97 && result[i] > 90) result[i] -= 26;
    // 정수를 알파벳으로 변환하고 match를 통해 알파벳이 아닌 것은 null로 바꿔서 문자열에 담아줌
    // 공백이 있는 경우 생각해서
    string += String.fromCharCode(result[i]).match(/^[A-Z, a-z]/g);
  }
  // 문자열의 모든 null을 공백으로 변환해줌
  return string.replaceAll("null", " ");
}
// 이렇게 작성하면 예시 답안은 맞지만 테스트에서 오답 발생

2;
function solution(s, n) {
  return (
    s
      .split("")
      .map((i) => {
        // 값이 공백일 경우 그대로 공백을 반환
        // 공백 조건 먼저 확인해줌
        if (i === " ") return " ";
        const code = i.charCodeAt(0);
        // 알파벳 조건 확인
        if ((code + n > 90 && code <= 90) || code + n > 122) {
          // 알파벳에 해당하지 않는 아스키코드일 경우 -26을 해줌
          return String.fromCharCode(code + n - 26);
        } else {
          // 아닌 경우 n만 더해서
          return String.fromCharCode(code + n);
        }
      })
      // 하나의 문자열로 합쳐줌
      .join("")
  );
}
