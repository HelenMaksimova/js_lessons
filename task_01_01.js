//Задать температуру в градусах по Цельсию. 
//Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
//Подсказка: расчет идет по формуле Tf = (9 / 5) * Tc + 32, 
//где Tf — температура по Фаренгейту, Tc — по Цельсию.

"use strict"

var celTemperature = prompt('Введите температуру в градусах по Цельсию:');
var farTemperature = (9 / 5) * parseInt(celTemperature) + 32;
alert('Температура по Фаренгейту равна ' + farTemperature);
