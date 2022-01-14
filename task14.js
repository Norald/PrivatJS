function doSmth() {
    var num = 0;
    var n = 1000;

    while (n > 50) {
        n /= 2;
        num++;
    }

    console.log("Получили число: " + n);
    console.log("Количество итераций: " + num);
}

doSmth();



