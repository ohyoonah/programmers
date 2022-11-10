// my_string은 "3 + 5"처럼 문자열로 된 수식입니다.
// 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.

1;
function solution(my_string) {
  let num = my_string.match(/[0-9]+/g);
  let operator = my_string.match(/[+-]/g).join("");
  return operator === "+"
    ? Number(num[0]) + Number(num[1])
    : Number(num[0]) - Number(num[1]);
}

// match로 정규표현식에 맞는 숫자를 담아줌 => +를 넣어서 두자리 이상 자연수도 담을 수 있게 함
// +, -연산자도 담아줌 => 배열로 담겨서 join으로 문자열로 넣어줌
// num 배열 안 문자를 숫자로 바꿔서 연산자에 맞게 계산해 줌
// 이렇게 작성할 경우 예제 답은 일치하지만 테스트에서 오답 처리됨
// 아마 연산이 한 번 더 이루어지는 경우 때문에 그런듯..?
// 1 + 2 - 1과 같은

2;
function solution(my_string) {
  return eval(my_string);
}

// eval은 문자로 표현된 코드를 실행하는 함수
// eval은 되도록 지양하라고 알고 있음
