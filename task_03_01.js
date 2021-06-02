// С помощью цикла while вывести все простые числа в промежутке от 0 до 100

'use strict'

function shieve(number) {
    let arr = [];
    for (let i = 0; i <= number; i++) {
        arr.push(i)
    }
    arr[1] = 0;

    let i = 2;
    let j;
    while (i <= number) {
        if (arr[i]) {
            j = i * 2;
            while (j <= number) {
                arr[j] = 0;
                j += i
            }
        }
        i++
    }

    return arr.filter(function (num) {
        return num > 0;
    });
}

let userNum = prompt('Введите положительное целое число:');
alert(`Простые числа в диапазоне от 0 до ${userNum}:\n${shieve(userNum).join(', ')}`);
