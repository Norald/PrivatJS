var arr = [1,2,3,4];

function arraySum(array) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(arraySum(arr));