/**

 Напишите функцию `f`, которая возвращает куб числа. Число передается параметром. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.

 ```js
 f(2); // 8
 f('Content'); // Error: parameter type is not a Number
 ```
 **/

function f(value) {
    if (typeof value === "number") {
        console.log(value * value * value);
    } else {
        throw new Error('parameter type is not a Number!');
    }
}

f(4);
f('Hello');
