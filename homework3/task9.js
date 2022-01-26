/**####Задача 9

 Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями.
 Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.

 Функция должна содержать проверки:

 - Первый параметр обязателен и может принимать только число, строку, объект, массив
 - Второй параметр обязателен и может принимать только число

 ```javascript
 arrayFill('x',5); // [x,x,x,x,x]
 ```
 **/


function arrayFill(value, size) {
    if (typeof value !== "number" && typeof value !== 'string' && typeof value !== 'object' && !Array.isArray(array)) {
        throw new Error("parameter type is not a number or string");
    }
    if (typeof size !== "number") {
        throw new Error("parameter type is not a number");
    }
    let arr = new Array(size);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = value;
    }
    return arr;
}

console.log(arrayFill("T", 12));
console.log(arrayFill(1, 12));