/** ####Задача 7

 Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число больше 0.

 ```js
 getDivisors(12); // [1, 2, 3, 4, 6, 12]
 getDivisors('Content'); // Error: parameter type is not a Number
 getDivisors(0); // Error: parameter can't be a 0
 **/

function getDivisors(value) {
    if (typeof value !== "number") {
        throw new Error("parameter type is not a Number");
    }
    if (value < 0) {
        throw new Error("parameter should be in the range of 1 to 7");
    }
    var resArr = [];
    for (let i = 1; i <= value; i++) {
        if (value % i === 0) {
            resArr.push(i);
        }
    }
    return resArr;
}

console.log(getDivisors(1));
console.log(getDivisors(99));
console.log(getDivisors(100));