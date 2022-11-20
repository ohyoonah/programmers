// ex) 1120321 => 만들 수 있는 최댓값은 1을 9로 바꾸는 방법 => 9920329
// 최솟값은 2를 0으로 바꾸는 방법 => 1100301
// 9920329 - 1100301 구하기

num = String(num);
let arr = num.split("");
// let result1 = ""
// let result2 = ""
// result1 = num.replaceAll(Math.min(...arr), "9")
// if(num.indexOf(Math.max(...arr)) === 0) {
//     result2 = num.replaceAll(Math.max(...arr), "1")
// } else {
//     result2 = num.replaceAll(Math.max(...arr), "0")
// }
// return Number(result1) - Number(result2)
