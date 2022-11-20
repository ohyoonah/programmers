// 문자열에서 "AWS" 제거
// 제거하고 남은 문자 return
// 남은 문자가 없으면 -1 return
// ex) "AWAWSSG" => "AWSG" => "G"

function getFinalString(s) {
  // 문자열 s에 "AWS"가 포함되어 있을 때까지 반복
  while (s.includes("AWS")) {
    // 원본 문자열을 "AWS"를 제거한 문자열로 변경
    s = s.replace("AWS", "");
  }
  // 문자열의 길이가 0이면 -1, 아니면 문자열 반환
  return s.length === 0 ? -1 : s;
}
