/**
 ####Задача 3

 Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье. Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

 ```js
 f(9,3,2); // 3
 f('s',9,3) // Error: all parameters type should be a Number
 ```
 **/

function f(val1, val2, val3) {
    if (typeof val1 !== "number" || typeof val2 !== "number" || typeof val3 !== "number") {
        throw new Error('all parameters type should be a Number');
    }
    return (val1 - val2) / val3;
}


console.log(f(4, 1, 3));
console.log(f(4, 's', 3));