// Bai Tap 1 - Bai1
function bai1_1(array) {
    let maxArr = array[0];
    array.forEach(function (value,index) {
        if (maxArr < value) {
            maxArr = value;
        };
    });
    return console.log(maxArr);
};

// Bai Tap 1 - Bai2
function bai1_2(array) {
    let maxArr = array[0];
    array.filter(function (value,index) {
        if (value < maxArr) {
            maxArr = value;
        };
    });
    return maxArr;
};

// Bai Tap 1 - Bai3
function bai1_3(arr) {
    const result = arr.map(function(value, index) {
        return value % 2;
    });
    return result
};

// Bai Tap 1 - Bai4
function bai1_4(text) {
    return text.repeat(10);
};

// Bai Tap 2 - Bai1
// dung includes - ES7
function bai2_1(arr, checkValue) {
    return arr.includes(checkValue);
};

// Bai Tap 2 - Bai2
function bai2_2(arr, value) {
    let maxArr = [];
    arr.forEach(function (item, index) {
        if (item > value) {
            maxArr.push(item);
        }
    });
    return maxArr;
};
