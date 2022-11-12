// 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
// "hi12392"

function solution(my_string) {
  return (
    my_string
      // 0-9 사이에 포함되지 않으면 빈 문자로 변환
      // "12392"
      .replace(/[^0-9]/g, "")
      // 배열로 변환
      // ["1", "2", "3", "9", "2"]
      .split("")
      // 오름차순 정렬
      // ["1", "2", "2", "3", "9"]
      .sort((a, b) => a - b)
      // map 매서드로 정수로 변환
      // [1, 2, 2, 3, 9]
      .map((num) => Number(num))
  );
}
