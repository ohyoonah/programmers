// 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다.
// 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

function solution(i, j, k) {
  let count = 0;
  for (let a = i; a <= j; a++) {
    count += String(a)
      .split("")
      .filter((n) => n === String(k)).length;
  }
  return count;
}

// 1. 결과 개수를 출력할 count 변수 선언
//   - for문 안에서 재할당이 이루어지므로 let으로 선언
// 2. for문으로 숫자 i에서 j까지 반복
// 3. 숫자를 문자열로 변환하고 잘라서 배열로 만들어 줌
// 4. filter 메서드로 문자열로 변환한 정수 k와 하는 것을 골라줌
// 5. 그 길이를 count 변수에 담은 뒤 return
