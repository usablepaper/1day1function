function callThreeTimes(callback) {
    for (let i = 0; i < 3; i++) {
        callback(i);
    }
}

function print(i) {
    console.log(i);
}

callThreeTimes(print);
