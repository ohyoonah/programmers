// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다.
// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

1;
function solution(s) {
  // 스택 문제
  let stack = 0;
  for (let i = 0; i < s.length; i++) {
    // 문자열 s의 인덱스가 (일 경우 +1을 해주고, )일 경우 -1을 해 줌
    stack += s[i] === "(" ? 1 : -1;
    // 반복 중 만약 스택의 값이 음수가 된다면 => ()) 이런 경우
    // false 반환
    if (stack < 0) return false;
  }
  // 스택이 0이면 즉, (와 )의 순서 및 개수가 일치하면 true를 반환하고 아니면 false를 반환
  return stack === 0 ? true : false;
}

2;
// 다른 사람 풀이
function solution(s) {
  let answer = true;
  let bracketList = 0;

  for (let i = 0; i < s.length; i++) {
    // "("일 경우 +1
    if (s[i] === "(") {
      bracketList++;
    } else {
      // ")"이면서 bracketList가 양수인 경우 -1 => )가 오기 전에 (가 온 상황
      if (bracketList > 0) {
        bracketList--;
        // ")"이면서 bracketList가 음수인 경우 return false 하고 반복 종료
      } else {
        answer = false;
        break;
      }
    }
  }
  if (bracketList > 0) answer = false;
  return answer;
}

3;
// 다른 사람 풀이
function solution(s) {
  let cum = 0;
  // for문을 간단하게 정의
  // for / of => 객체의 모든 열거할 수 있는 프로퍼티의 개수만큼 반복적으로 실행
  // for(let i = 0; i < s.length; i++)과 결과가 같음
  for (let paren of s) {
    cum += paren === "(" ? 1 : -1;
    if (cum < 0) {
      return false;
    }
  }
  return cum === 0 ? true : false;
}
// 1번 풀이와 같음
// for문을 간단하게 사용할 수 있음에 차이
