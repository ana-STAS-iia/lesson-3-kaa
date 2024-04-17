/*
* Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое, (округлить результат до десятых)
* */

function abs(array) {
    if (array.length === 0) {
        return 0; 
    }

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    let average = sum / array.length;
    return Number(average.toFixed(1));
}











































module.exports = abs