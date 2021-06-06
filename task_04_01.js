// Написать функцию, преобразующую число в объект. 
// Передавая на вход число от 0 до 999, надо получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 надо получить следующий объект: 
// {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение 
// с помощью console.log и вернуть пустой объект.

'use strict'

function numToObject(num) {

    if (num > 999) {
        console.log('Число превышает максимальную разрядность');
        return {};
    }

    let keysArray = ['ones', 'tens', 'hundreds'];
    let result = {};
    keysArray.forEach(function (item) {
        result[item] = num % 10;
        num = parseInt(num / 10);
    });

    return result;
}

function numToSringToObject(num) {

    if (num > 999) {
        console.log('Число превышает максимальную разрядность');
        return {};
    }

    let numStr = String(num).split('');
    let keysArray = ['ones', 'tens', 'hundreds'];
    let result = {};
    keysArray.forEach(function (item) {
        let value = numStr.pop();
        if (value == undefined) { value = 0; }
        result[item] = Number(value);
    });
    return result;
}

let userNum = prompt('Введите целое число от 0 до 999:');
alert(`Объект, полученный с помощью функции numToObject:\n${JSON.stringify(numToObject(userNum), null, 2)}\n
Объект, полученный с помощью функции numToStringToObject:\n${JSON.stringify(numToSringToObject(userNum), null, 2)}`);
