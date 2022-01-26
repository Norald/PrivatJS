/**

 Новое задание
 Сдать 28 янв.
 Задача-1
 ####Задача 1

 Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

 Функция должна содержать проверки:

 - Первый параметр обязателен и может принимать только массив
 - Второй параметр обязателен и может принимать только функцию

 ```javascript
 const arr = [1,2,3];
 forEach(arr, function(item, i, arr) {});
 **/

function customForEach(array, callback) {
    if (!Array.isArray(array)) {
        throw new Error("parameter type is not a array");
    }
    if (typeof callback !== "function") {
        throw new Error("parameter type is not a function");
    }
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

function callback(element) {
    console.log(element);
}

const array = [1, 2, 3, 4, 10];
customForEach(array, callback);

