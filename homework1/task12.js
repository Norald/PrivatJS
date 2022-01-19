var mas = [1, 2, 3, -5, -2, 1, -4];

function getSumOfPosNumbers(mas) {
    var result = 0;
    for (let i = 0; i < mas.length; i++) {
        if (mas[i] > 0) {
            result += mas[i];
        }
    }
    return result;
}

console.log(getSumOfPosNumbers(mas));