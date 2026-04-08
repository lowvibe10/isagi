// 2중 for 문을 사용해 2단 ~ 9단 구구단을 출력하세요.
let dan = 2;
let num = 1;

whille (dan <= 9); {
    num = 1;
    console.log(`${dan}단`);
    while (num <= 9) {
        console.log(`${dan} x ${num} = ${dan * num}`);
        num++;
    }
    dan++;
    console.log(`\n`);
}

// label을 사용해 