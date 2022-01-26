/**
 ####Задача 3

 Создать имплементацию функции `every`, логика работы такая же как и у родного метода.

 Функция должна содержать проверки:

 - Первый параметр обязателен и может принимать только массив
 - Второй параметр обязателен и может принимать только функцию

 ```javascript
 const arr = [1,2,3];
 every(arr, function(item, i, arr) {});
 ```
 **/

function customEvery(array, func) {
    if (!Array.isArray(array)) {
        throw new Error("parameter type is not a array");
    }
    if (typeof callback !== "function") {
        throw new Error("parameter type is not a function");
    }
    var res = true;
    for (let i = 0; i < array.length; i++) {
        if (!func(array[i])) {
            return false;
        }
    }
    return res;
}

function callback(item) {
    return item >= 11;
}

var array = [12, 54, 18, 130, 44];
var array2 = [12, 5, 8, 130, 44];

console.log(customEvery(array, callback));
console.log(customEvery(array2, callback));