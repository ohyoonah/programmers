// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
// 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
// strings                     n	       return
// ["sun", "bed", "car"]	     1	       ["car", "bed", "sun"]
// ["abce", "abcd", "cdx"]  	 2	       ["abcd", "abce", "cdx"]

function solution(strings, n) {
  // 문자열이 들어있는 배열 정렬
  return strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  );
}

// localeCompare() => 기준 문자열과 비교했을 때 비교 대상 문자열이 정렬상 전에 오는가 후에 오는가 같은가를 알려주는 숫자를 리턴
// a.localeCompare(b) => a가 b보다 사전순으로 앞 = 음수 / 뒤 = 양수 / 같음 = 0
