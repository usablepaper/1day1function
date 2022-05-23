function 삼육구(number) {
    let nums = number.toString().split("");
    let clap = [];
    for (let num of nums) {
        if (num === "3" || num === "6" || num === "9") {
            clap.push("짝");
        }
    }
    return clap;
}

console.log(삼육구(369));
console.log(삼육구(336699));
console.log(삼육구(12));
