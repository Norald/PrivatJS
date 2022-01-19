var mas = [1, 2, 5, 9, 4, 13, 4, 10];

function checkFor4(mas) {
    for (let i = 0; i < mas.length; i++) {
        if (mas[i] == 4) {
            console.log("Есть!");
            break;
        }
    }
}

checkFor4(mas);