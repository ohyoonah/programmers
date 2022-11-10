// 문자열 before와 after가 매개변수로 주어질 때,
// before의 순서를 바꾸어 after를 만들 수 있으면 1을,
// 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

1;
function solution(before, after) {
  return [...before].reverse().join("") === after ? 1 : 0;
}

// 이렇게 작성했을 경우 예시 답안과는 동일한 결과가 나오지만 채점은 틀렸다고 나옴
// 위 코드는 before와 after가 일치하는 지 확인하는 코드
// 하지만 문제가 원하는 것은 before를 after로 만들 수 있는 지 묻는 것

2;
function solution(before, after) {
  return [...before].reverse().sort().join("") === [...after].sort().join("")
    ? 1
    : 0;
}

// 이런 식으로 after도 하나하나 비교해 주면 완성됨
// 중간에 sort 메서드로 정렬을 해주어서 자리가 일치하는 것까지 확인

// 배열과 객체는 같은 요소를 가지고 있더라도 주소 값이 같지 않으면 같다고 판단하지 않음
// 콘솔창에 [] === []를 입력하면 false가 나오는 것과 같음
