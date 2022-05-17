//a부터 b까지 합을 구하는 함수

function sumAll(a, b) {
    let output = 0;
    for (let i = a; i <= b; i++) {
        output += i;
    }
    return output;
}

console.log(`2부터 10까지의 합은 ${sumAll(2, 10)}입니다.`);

//a부터 b까지 곱을 구하는 함수

function multipleAll(a, b) {
    let output = 1;
    for (let i = a; i <= b; i++) {
        output *= i;
    }
    return output;
}

console.log(`2부터 10까지의 곱은 ${multipleAll(2, 10)}입니다.`);
