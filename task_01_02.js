//Объявить две переменные: admin и name. Записать в name строку "Василий"; 
//Скопировать значение из name в admin. Вывести admin (должно вывестись «Василий»).

"use strict"

var admin;
var name;
name = prompt('Введите имя админа:');
admin = name;
alert('Поздравляем, админа теперь зовут ' + admin);
