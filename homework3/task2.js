/**

 Новое задание
 Сдать 28 янв.
 Задача-2
 ####Задача 2

 Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.

 Функция должна содержать проверки:

 - Первый параметр обязателен и может принимать только массив
 - Второй параметр обязателен и может принимать только функцию

 ```javascript
 const arr = [1,2,3];
 filter(arr, function(item, i, arr) {});
 ```
 **/


function customFilter(array, func) {
    if (!Array.isArray(array)) {
        throw new Error("parameter type is not a array");
    }
    if (typeof callback !== "function") {
        throw new Error("parameter type is not a function");
    }
    var filtered = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            filtered.push(array[i]);
        }
    }
    return filtered;
}

function callback(item) {
    return item > 5;
}

var array = [1, 2, 3, 4, 10];
var returnedArray = customFilter(array, callback);

console.log(returnedArray);