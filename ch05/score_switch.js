const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("숫자를 입력해주세요", function (score) {
    rl.close();
});