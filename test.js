// 삼육구

function 삼육구(number) {
    let nums = number.toString().split("");
    let clap = [];

    for (let num of nums) {
        if (num === "3" || num === "6" || num === "9") {
            clap.push("짝👏");
        }
    }
    return clap;
}

console.log(삼육구(369));
console.log(삼육구(336699));
console.log(삼육구(12));

// 5초 알림창

const alert = document.querySelector("#alert");
const time = document.querySelector("#time");

let count = 5;

setInterval(function () {
    count--;
    if (count >= 0) {
        time.textContent = count;
    }
    if (count === 0) {
        alert.style.display = "none";
    }
}, 1000);

// 별트리 만들기

//     *
//    ***
//   *****
//  *******
// *********

const level = 5;

for (i = 1; i <= level; i++) {
    console.log("".repeat(level - i) + "*".repeat(i * 2 - 1));
}

// 프라미스 연습

const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve("🐓"), 1000);
    });

const getEgg = (hen) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    });

const cook = (egg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen()
    .then((hen) => getEgg(hen))
    .then((egg) => cook(egg))
    .then((meal) => console.log(meal));

// 콜백함수 선언적 함수

function callThreeTimes(callback) {
    for (let i = 0; i < 3; i++) {
        callback(i);
    }
}

function print(i) {
    console.log(i);
}

callThreeTimes(print);

// 콜백함수 익명함수

function callThreeTimes(callback) {
    for (let i = 0; i < 3; i++) {
        callback(i);
    }
}

callThreeTimes(function (i) {
    console.log(i);
});

callThreeTimes((i) => {
    console.log(i);
});
