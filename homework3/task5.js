/**
 ####Задача 5

 Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.

 Функция должна содержать проверки:

 - Первый параметр обязателен и может принимать только массив
 - Второй параметр обязателен и может принимать только функцию
 - Третий параметр обязателен и может принимать только строку или число

 ```javascript
 const arr = [1,2,3];
 const acc = 0;
 reduce(arr, function(acc, item, i, arr) {}, acc);
 ```
 **/

function customReduce(array, func, reducer) {
    if (!Array.isArray(array)) {
        throw new Error("parameter type is not a array");
    }
    if (typeof callback !== "function") {
        throw new Error("parameter type is not a function");
    }

    if (typeof reducer !== "number" && typeof reducer !== 'string') {
        throw new Error("parameter type is not a number or string");
    }
    let result = reducer;
    for (let i = 0; i < array.length; i++) {
        result = func(array[i], result);
    }
    return result;
}

// есть ли хоть одно положительное число
function callback(item, reducer) {
    return item + reducer;
}

var array = [1, 2, 3, 4];

console.log(customReduce(array, callback, 5));
console.log(customReduce(array, callback, -5));