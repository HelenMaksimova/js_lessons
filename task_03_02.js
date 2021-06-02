// С этого урока начинаем работать с функционалом интернет-магазина.
// Предположим, есть сущность корзины. 
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. 
// Товары в корзине хранятся в массиве. Задачи:
//     a. Организовать такой массив для хранения товаров в корзине;
//     b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

'use strict'

function countBasketPrice(basketArr) {
    return basketArr.reduce(function (acc, price) {
        return acc + price;
    }, 0);
}

let basket = [];
let userStr = prompt('Введите цены товаров через пробел:');
basket.push(...userStr.split(' ').map(function (elem) {
    return Number(elem);
})
);
alert(`В корзине лежат товары со следующими ценами:\n${basket.join(', ')}\nОбщая стоимость товаров в корзине равна ${countBasketPrice(basket)} руб.`);
