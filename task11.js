var mas = [2, 5, 9, 15, 0, 4];

function showNumbers(mas) {
    for (let i = 0; i < mas.length ; i++) {
        if (mas[i] > 3 && mas[i] < 10) {
            console.log(mas[i]);
        }
    }
}

showNumbers(mas);