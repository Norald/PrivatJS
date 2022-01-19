var arr = [1, 2, 3, 4];

function arraySumPairMoreThan3(array) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0 && arr[i] > 3) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(arraySumPairMoreThan3(arr));