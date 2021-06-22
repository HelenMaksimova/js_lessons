'use strict'
export let products = [
    ['Милая панда', 5000, 1, 1, 1, null, null, `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nulla harumperspiciatis officia saepe enim nostrum vel repellat, voluptas velit.`, 'img/products/1/00.jpg',
        ['img/products/1/00.jpg', 'img/products/1/01.jpg', 'img/products/1/02.jpg']],
    ['Добрая панда', 6000, 1, 1, 2, null, null, `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nulla harumperspiciatis officia saepe enim nostrum vel repellat, voluptas velit.`, 'img/products/2/00.jpg',
        ['img/products/2/00.jpg', 'img/products/2/01.jpg', 'img/products/2/02.jpg']],
    ['Весёлая панда', 7000, 1, 1, 3, null, null, `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nulla harumperspiciatis officia saepe enim nostrum vel repellat, voluptas velit.`, 'img/products/3/00.jpg',
        ['img/products/3/00.jpg', 'img/products/3/01.jpg', 'img/products/3/02.jpg']],
    ['Сонная панда', 4000, 1, 1, 4, null, null, `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nulla harumperspiciatis officia saepe enim nostrum vel repellat, voluptas velit.`, 'img/products/4/00.jpg',
        ['img/products/4/00.jpg', 'img/products/4/01.jpg', 'img/products/4/02.jpg']],
    ['Голодная панда', 2000, 1, 1, 5, null, null, `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nulla harumperspiciatis officia saepe enim nostrum vel repellat, voluptas velit.`, 'img/products/5/00.jpg',
        ['img/products/5/00.jpg', 'img/products/5/01.jpg', 'img/products/5/02.jpg']],
    ['Грустная панда', 3000, 1, 1, 6, null, null, `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nulla harumperspiciatis officia saepe enim nostrum vel repellat, voluptas velit.`, 'img/products/6/00.jpg',
        ['img/products/6/00.jpg', 'img/products/6/01.jpg', 'img/products/6/02.jpg']],
    ['Маленькая панда', 8000, 1, 1, 7, null, null, `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nulla harumperspiciatis officia saepe enim nostrum vel repellat, voluptas velit.`, 'img/products/7/00.jpg',
        ['img/products/7/00.jpg', 'img/products/7/01.jpg', 'img/products/7/02.jpg']],
    ['Грозная панда', 12000, 1, 1, 8, null, null, `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nulla harumperspiciatis officia saepe enim nostrum vel repellat, voluptas velit.`, 'img/products/8/00.jpg',
        ['img/products/8/00.jpg', 'img/products/8/01.jpg', 'img/products/8/02.jpg']],
];

export let basketHeadersList = [
    `<p class="bw_item_name">Наименование</p>
    <p class="bw_item_name">Количество</p>
    <p class="bw_item_name">Cумма</p>`,
    `<p class="bw_item_name">Введите адрес доставки:</p>`,
    `<p class="bw_item_name">Введите комментарий:</p>`,
];

export let basketButtonsList = [
    `<button class="imgw_button" id="bw_basket_next">Далее</button>`,
    `<button class="imgw_button" id="bw_adress_preview">Назад</button>
    <button class="imgw_button" id="bw_adress_next">Далее</button>`,
    `<button class="imgw_button" id="bw_comment_preview">Назад</button>
    <button class="imgw_button" id="bw_comment_complete">Готово</button>`,
];