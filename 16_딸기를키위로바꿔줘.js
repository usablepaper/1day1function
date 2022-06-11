// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

//+추가문제 '무슨 과일을' , '무슨 과일로' 바꾸고싶은지도 인풋값으로 입력해서 출력할 수 있게 해보기

const array = ["🍌", "🍓", "🍇", "🍓"];

function replace(array, from, to) {
    const newArray = new Array(...array);
    array.forEach((_, index) => {
        array[index] === from ? (newArray[index] = to) : null;
    });
    return newArray;
}

let result = replace(array, "🍓", "🥝");
console.log(result);

// const array = ["🍌", "🍓", "🍇", "🍓"];

// function replace(array, from, to) {
//     const newArray = Array.from(array);
//     for (let i = 0; i <= newArray.length; i++) {
//         if (newArray[i] === from) {
//             newArray[i] = to;
//         }
//     }
//     return newArray;
// }

// const result = replace(array, "🍓", "🥝");
// console.log(result);
