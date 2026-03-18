const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("정수를 입력하세요. : ", function (num){
    // 입력받은 num이 짝수인 경우 "짝수입니다."
    // 홀수인 경우 "홀수입니다." 출력 후 종료
    // 홀수/짝수 판별법 - 2로 나머지 연산 후 나머지가 0이면 짝수
    // 나머지 연산 후 나머지가 1이면 홀수
    if (num % 2 === 0) {
        console.log("짝수입니다.");
    } else {
        console.log("홀수입니다.");
    }
    rl.close();
});

rl.question("나이를 입력하세요. : ", function (age) {
    // 성인 판별
    // 나이는 1~100살 이내 범위여야 합니다.
    // 19세 이상인 경우 "성인닙니다." 출력
    // 19세 미만인 경우 "미성년자입니다." 출력
    if (age < 19 && age > 0) {
           console.log("미성년자입니다.")
    } else if (age >= 19 && age <= 100){
        console.log("성인입니다.")
    }
    rl.close();
});