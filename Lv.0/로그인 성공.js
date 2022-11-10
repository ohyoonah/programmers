// 머쓱이는 프로그래머스에 로그인하려고 합니다.
// 머쓱이가 입력한 아이디와 패스워드가 담긴 배열 id_pw와 회원들의 정보가 담긴 2차원 배열 db가 주어질 때,
// 다음과 같이 로그인 성공, 실패에 따른 메시지를 return하도록 solution 함수를 완성해주세요

// 아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"을 return합니다
// 로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”를, 아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 “wrong pw”를 return 합니다.

function solution(id_pw, db) {
  // id와 pw 값을 나눠줌
  let [id, pw] = id_pw;
  // db에 id값이 일치하는 값이 없을 경우 fail 반환
  if (!db.find(([id_1]) => id_1 === id)) return "fail";
  // db에 id값과 pw값이 모두 일치하는 배열이 있으면 login 아니면 wrong pw
  return db.find(([id_1, pw_1]) => id_1 === id && pw_1 === pw)
    ? "login"
    : "wrong pw";
}

// find 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환
// 없다면 undefined
