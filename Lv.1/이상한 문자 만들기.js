// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
// s	                return
// "try hello world"	"TrY HeLlO WoRlD"

function solution(s) {
  // "try hello world"
  return (
    s
      // ["try", "hello", "world"]
      .split(" ")
      .map((i) =>
        i
          // [["t","r","y"],["h","e","l","l","o"],["w","o","r","l","d"]]
          .split("")
          .map((j, idx) =>
            // 인덱스가 짝수일 경우 => ["t","r","y"]의 짝수 인덱스 "t", "y"를 대문자로 변환 / 홀수 인덱스 "r"은 소문자로
            idx % 2 === 0 ? i[idx].toUpperCase() : i[idx].toLowerCase()
          )
          // ["TrY","HeLlO","WoRlD"]
          .join("")
      )
      // "TrY HeLlO WoRlD"
      .join(" ")
  );
}
