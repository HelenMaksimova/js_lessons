'use strict'

import { Product, Basket } from './classes.js';
import { products, basketButtonsList, basketHeadersList } from './data.js'

// Функции для корзины на главной странице

function renewBasket(basketObj) {
    let basket = document.querySelector('.basket_content');
    basket.textContent = '';
    (basketObj.basket.length == 0) ? basket.insertAdjacentHTML('beforeend', 'Корзина пуста') :
        basket.insertAdjacentHTML('beforeend', `Панд в корзине: ${basketObj.sumQuantity()}<br>На сумму: ${basketObj.sumPrices()} звериков`);
}

function addToBasket(event) {
    if (event.target.className == 'sell_button') {
        let id = event.target.getAttribute("data_id");
        if (userBasket.basket.find(item => item.id == id)) {
            userBasket.increaseQuantity(id)
        }
        else {
            let product = productsObjList.find(item => item.id == id);
            userBasket.addProduct(product);
        }
        renewBasket(userBasket);
    }
    event.stopPropagation();
}

// Функции для заполнения каталога на главной странице
// (в том числе счётчик-замыкание для поэтапной прогрузки по три элемента с кнопкой Показать ещё)

function countItems() {
    let count = 0;
    return function (delta) {
        count += delta;
        return count;
    }
}

function viewCatalogItems(event) {

    if (count <= productsObjList.length) {
        catalogButtons.textContent = '';
        let delta;
        if (productsObjList.length - count >= count) {
            delta = 3;
            catalogButtons.insertAdjacentHTML('beforeend',
                `<button class="catalog_button">Показать ещё</button>`);
        }
        else
            delta = productsObjList.length - count;
        let result = productsObjList.slice(count, countCatalogItems(delta));
        count = countCatalogItems(0)
        drawCatalogItems(catalog, result)
    }
    event.stopPropagation();
}

function drawCatalogItems(parentElement, products) {
    products.forEach(product => {
        parentElement.insertAdjacentHTML('beforeend',
            `<div class="card">
                <h1 class="card_header">${product.name}</h1>
                <p class="card_text">${product.description}</p>
                <img class="card_image" src="${product.image}" data_id="${product.id}">
                <p class="card_price">${product.price} звериков</p>
                <button class="sell_button" data_id="${product.id}">КУПИТЬ</button>
            </div>`)
    });
}

// Функции для модального окна с картинками товаров

function openImageWindow(event) {
    if (event.target.className == 'card_image') {
        let imgList = document.querySelectorAll('.image_box');
        if (imgList) {
            imgList.forEach(item => item.remove());
        }
        imageWindow.classList.add('display_flex');
        let id = event.target.getAttribute('data_id');
        let product = productsObjList.find(item => item.id == id);
        product.images.forEach(item => imageButtons.insertAdjacentHTML('beforebegin',
            `<img src="${item}" class="image_box">`));
        document.querySelector('.image_box').classList.toggle('display_block');
    }
    event.stopPropagation();
}

function viewImages(event) {
    let imgList = Array.from(document.querySelectorAll('.image_box'));
    let idx = imgList.findIndex(item => item.className == 'image_box display_block');
    if (event.target.id == 'img_next') {
        imgList[idx].classList.toggle('display_block');
        (imgList[idx + 1]) ? imgList[idx + 1].classList.toggle('display_block') :
            imgList[0].classList.toggle('display_block');
    }
    if (event.target.id == 'img_preview') {
        imgList[idx].classList.toggle('display_block');
        (imgList[idx - 1]) ? imgList[idx - 1].classList.toggle('display_block') :
            imgList[imgList.length - 1].classList.toggle('display_block');
    }
    event.stopPropagation();
}

// Функция для закрытия модальных окон

function closeModalWindow(event) {
    let modalWindow;
    switch (event.target.className) {
        case 'imgw_close':
            modalWindow = imageWindow;
            break;
        case 'bw_close':
            menuPoints[bwSheetIdx].classList.toggle('menu_color_red');
            bwSheetIdx = 0;
            modalWindow = basketWindow;
            break;
    }
    if (modalWindow) {
        modalWindow.classList.remove('display_flex');
        event.stopPropagation();
    }
}

// Функции для модального окна корзины

function openBasketWindow(event) {
    if (event.target.className == "basket_content") {
        drawBwElements(0)
        fillBasketItems();
        basketWindow.classList.add('display_flex');
    }
    event.stopPropagation();
}

function drawBwElements(idx) {
    basketHeader.textContent = '';
    basketButtons.textContent = '';
    basketHeader.insertAdjacentHTML('beforeend',
        basketHeadersList[idx]);
    basketButtons.insertAdjacentHTML('beforeend',
        basketButtonsList[idx]);
    menuPoints[idx].classList.toggle('menu_color_red');
}

function fillBasketItems() {
    basketContent.textContent = '';
    if (userBasket.basket.length) {
        userBasket.basket.forEach(product => {
            basketContent.insertAdjacentHTML('beforeend',
                `<div class="bw_basket_item">
                <p class="bw_item_name">${product.name}</p>
                <div class="bw_item_quantity_container">
                    <button class="bw_item_decrease" data_id="${product.id}">-</button>
                    <div class="bw_item_quantity">${product.quantity}</div>
                    <button class="bw_item_increase" data_id="${product.id}">+</button>
                </div>
                <div class="bw_item_summ">${product.getClearPrice()}</div>
                <button class="bw_item_delete" data_id="${product.id}"></button>
            </div>`);
        });
        basketContent.insertAdjacentHTML('beforeend',
            `<div class="bw_basket_item">
                <p class="bw_item_name">Всего:</p>
                <p class="bw_item_name">${userBasket.sumPrices()}</p>
            </div>`)
    }
    else {
        basketContent.insertAdjacentHTML('beforeend',
            `<p class="bw_empty_basket">Корзина пуста</p>`)
    }

}

function fillAdressItem() {
    basketContent.textContent = '';
    basketContent.insertAdjacentHTML('beforeend',
        ``)
}

function fillCommentItem() {
    basketContent.textContent = '';
    basketContent.insertAdjacentHTML('beforeend',
        ``)
}

function changeBwItemQuantity(event) {
    let id = event.target.getAttribute('data_id');
    switch (event.target.className) {
        case 'bw_item_decrease':
            userBasket.decreaseQuantity(id);
            break;
        case 'bw_item_increase':
            userBasket.increaseQuantity(id);
            break;
    }
    if (bwSheetIdx == 0) {
        fillBasketItems();
        renewBasket(userBasket);
    }
    event.stopPropagation();
}

function deleteBasketItem(event) {
    if (event.target.className == 'bw_item_delete') {
        userBasket.deleteProduct(event.target.getAttribute('data_id'));
        fillBasketItems();
        renewBasket(userBasket);
    }
    event.stopPropagation();
}

//Функция для смены вкладок в модальном окне корзины

function nextWbSheet(event) {
    let fillFunc;
    switch (event.target.id) {
        case 'bw_basket_next':
            menuPoints[0].classList.toggle('menu_color_red');
            fillFunc = fillAdressItem;
            bwSheetIdx = 1;
            break;
        case 'bw_adress_preview':
            menuPoints[1].classList.toggle('menu_color_red');
            fillFunc = fillBasketItems;
            bwSheetIdx = 0;
            break;
        case 'bw_adress_next':
            menuPoints[1].classList.toggle('menu_color_red');
            fillFunc = fillCommentItem;
            bwSheetIdx = 2;
            break;
        case 'bw_comment_preview':
            menuPoints[2].classList.toggle('menu_color_red');
            fillFunc = fillAdressItem;
            bwSheetIdx = 1;
            break;
        case 'bw_comment_complete':
            menuPoints[2].classList.toggle('menu_color_red');
            menuPoints[0].classList.toggle('menu_color_red');
            fillFunc = function () {
                userBasket = new Basket();
                renewBasket(userBasket);
                basketWindow.classList.remove('display_flex');
            };
            bwSheetIdx = 0;
            break;
    }
    if (fillFunc) {
        drawBwElements(bwSheetIdx);
        fillFunc();
    }
    event.stopPropagation()
}

let productsObjList = products.map(item => new Product(...item))
let userBasket = new Basket();
let catalog = document.querySelector('.catalog_items');
let catalogButtons = document.querySelector('.catalog_buttons');
let basket = document.querySelector('.basket');
let imageWindow = document.querySelector('#img_window');
let imageButtons = imageWindow.querySelector('.imgw_buttons');
let basketWindow = document.querySelector('#bw_window');
let basketContent = basketWindow.querySelector('.bw_content');
let basketButtons = basketWindow.querySelector('.bw_buttons');
let basketHeader = basketWindow.querySelector('.bw_title');
let menuPoints = Array.from(basketWindow.querySelectorAll('.bw_menu_point'));
let bwSheetIdx = 0;
let countCatalogItems = countItems()
let count = 0

renewBasket(userBasket);
window.onload = viewCatalogItems;
catalog.addEventListener('click', addToBasket);
catalog.addEventListener('click', openImageWindow);
basket.addEventListener('click', openBasketWindow);
imageWindow.addEventListener('click', closeModalWindow);
basketWindow.addEventListener('click', closeModalWindow);
imageButtons.addEventListener('click', viewImages);
basketContent.addEventListener('click', deleteBasketItem);
basketContent.addEventListener('click', changeBwItemQuantity);
basketButtons.addEventListener('click', nextWbSheet);
catalogButtons.addEventListener('click', viewCatalogItems);
