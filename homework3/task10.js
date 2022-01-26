/**
 ####Задача 10

 Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке.

 Функция должна содержать проверки:

 - Первый параметр обязателен и может принимать только массив
 - Генерировать ошибку если был передан пустой массив

 ```javascript
 const arr = [3,2,1];
 reverse(arr); // [1,2,3]
 ```
 **/

function customReverse(array) {
    var arrayResult = [];
    for (let i = array.length - 1; i >= 0; i--) {
        arrayResult.push(array[i]);
    }
    return arrayResult;
}

const arr = [8, 7, 6, 5, 4, 3, 2, 1];
console.log(customReverse(arr))