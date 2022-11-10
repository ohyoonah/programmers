// 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다. 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 몇 번 밀어야 하는지 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

function solution(A, B) {
  // A문자열을 문자 하나하나 자른 배열로 만들어줌
  let arr = [...A];
  for (let i = 0; i < arr.length; i++) {
    // 문자열 A와 B가 같다면 움직일 필요가 없으므로 0 반환
    if (A === B) return 0;
    // unshift 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환
    // 즉, arr배열의 마지막 요소를 (pop) 맨 앞으로 넣어줌
    arr.unshift(arr.pop());
    // 배열의 문자열을 합쳤을 때 B와 일치하면 i + 1을 반환
    if (arr.join("") === B) return i + 1;
  }
  // 문자열을 옮겨도 일치하지 않을 경우 -1 반환
  return -1;
}
