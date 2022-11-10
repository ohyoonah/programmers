// 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

1;
function solution(array) {
  let count = 0;
  array = array.join("");
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "7") count++;
  }
  return count;
}

// 첫 번째로 풀이한 방법에서는
// 배열을 문자열로 합쳐준 뒤 문자열 인덱스를 비교해서 7과 같으면 count를 늘려주는 식으로 풂

2;
function solution(array) {
  return array
    .join("")
    .split("")
    .filter((i) => i === "7").length;
}

// 두 번째로는 간단하게 정리함
// 동일하게 문자열로 변환해 준 다음 split으로 한 자씩 잘라서 다시 배열을 만들어 줌
// 그런 다음 filter로 7과 일치하는 걸 찾고 개수를 return 해 줌
