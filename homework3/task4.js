/** ####Задача 4

 Создать имплементацию функции `some`, логика работы такая же как и у родного метода.

 Функция должна содержать проверки:

 - Первый параметр обязателен и может принимать только массив
 - Второй параметр обязателен и может принимать только функцию

 ```javascript
 const arr = [1,2,3];
 some(arr, function(item, i, arr) {});
 ```
 **/

function customSome(array, func) {
    if (!Array.isArray(array)) {
        throw new Error("parameter type is not a array");
    }
    if (typeof callback !== "function") {
        throw new Error("parameter type is not a function");
    }
    var res = false;
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            return true;
        }
    }
    return res;
}

// есть ли хоть одно положительное число
function callback(item) {
    if (item >= 0) {
        return true;
    } else {
        return false;
    }
}

var array = [-2, -3, -18, -130, -44];
var array2 = [-12, -5, 8, -130, -44];

console.log(customSome(array, callback));
console.log(customSome(array2, callback));