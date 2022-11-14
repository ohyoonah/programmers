// 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다.
// spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.
// spell	          dic	                                    result
// ["p", "o", "s"]	["sod", "eocd", "qixm", "adio", "soo"]	2
// ["z", "d", "x"]	["def", "dww", "dzx", "loveaw"]	        1

function solution(spell, dic) {
  // spell 배열을 정렬한 뒤 하나의 문자열로 합쳐줌
  spell = spell.sort().join("");
  // dic 배열을 map으로 순회
  // dic의 원소(문자열)을 split으로 하나하나의 문자로 분리한 배열로 만들어줌
  // ex) [["s", "o", "d"], ...]
  // 배열을 정렬한 뒤 하나의 문자열로 합쳐줌
  // find로 spell과 일치하는 문자열을 찾아서 값이 있으면 1 없으면 2 반환
  return dic.map((i) => i.split("").sort().join("")).find((i) => i === spell)
    ? 1
    : 2;
}
