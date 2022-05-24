function min(array) {
    let output = array[0];
    for (const item of array) {
        //현재 output부터 더 작은 item이 있다면
        if (output > item) {
            //output의 값을 item으로 변경
            output = item;
        }
    }
    return output;
}

const testArray = [34, 5, 11, 85, 92];
console.log(`${testArray}중에서 최솟값은 = ${min(testArray)}`);
