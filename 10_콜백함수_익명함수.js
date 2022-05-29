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
