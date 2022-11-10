// 문자열 my_string이 매개변수로 주어집니다.
// my_string은 소문자, 대문자, 자연수로만 구성되어있습니다.
// my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  // 문자열에서 정규표현식(0~9)에 맞는 요소들을 nums 배열에 넣어 줌
  // /[0-9]+/g => +는 여러개일 수도 있다는 의미로, 붙이면 연속되는 문자를 하나로 인식 / ex) "1ab34" => ["1", "34"]
  const nums = my_string.match(/[0-9]+/g);
  // 만약 nums가 있다면(문자열 안에 숫자가 존재한다면) 각 배열 안의 문자열을 숫자로 바꿔준 후 reduce로 요소들을 합해줌
  // 만약 nums가 없다면(문자열 안에 숫자가 존재하지 않는다면) 0을 반환해 줌
  return nums ? nums.map((i) => Number(i)).reduce((a, b) => a + b, 0) : 0;
}

// reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환
// reduce((a, b) => a + b, 0) 에서 0은 0번째 인덱스부터 시작한다는 의미
