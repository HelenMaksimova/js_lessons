// Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.

// * Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине
// актуальна не только для корзины, но и для каталога. Стремиться нужно к тому, 
// чтобы объект «Продукт» имел единую структуру для различных модулей сайта, 
// но в разных местах давал возможность вызывать разные методы.

'use strict'

class Product {
    constructor(name, price, quantity = 1, discount = 1, id, categoryId, vendorСode, description, dateOfManufacture, shelfLife) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.discount = discount;
        this.id = id;
        this.categoryId = categoryId;
        this.vendorСode = vendorСode;
        this.description = description;
        this.dateOfManufacture = dateOfManufacture;
        this.shelfLife = shelfLife;
    }

    showProduct() {
        return JSON.stringify(this, null, 2);
    }

    getResultPrice() {
        return this.price * this.quantity * this.discount;
    }

    getClearPrice() {
        return this.price * this.quantity;
    }

}

class Basket {
    constructor() {
        this.basket = [];
    }

    addProduct(product) {
        this.basket.push(product);
    }

    deleteProduct(id) {
        let idx = this.basket.findIndex(function (item) {
            return item.id == id;
        });
        if (idx >= 0) {
            this.basket.splice(idx, 1);
        }

    }

    increaseQuantity(id, delta = 1) {
        let product = this.basket.find(function (item) {
            return item.id == id;
        });
        product.quantity += delta;
    }

    decreaseQuantity(id, delta = 1) {
        let product = this.basket.find(function (item) {
            return item.id == id;
        });
        if (product.quantity >= delta) {
            product.quantity -= delta;
        }
    }

    sumPrices() {
        return this.basket.reduce(function (acc, product) {
            return acc + product.getClearPrice();
        }, 0);
    }

    showBasket() {
        return this.basket.map(function (item) {
            return item.showProduct()
        }).join('\n')
    }
}

let products = [
    ['fish', 50, 5, 1, 1],
    ['salt', 10, 2, 1, 2],
    ['cucumbers', 35, 1.5, 1, 3],
];

let userBasket = new Basket();
products.forEach(function (product) {
    userBasket.addProduct(new Product(...product));
});

alert(`В корзине лежат товары:
${userBasket.showBasket()}
Общая сумма: ${userBasket.sumPrices()}`)

userBasket.decreaseQuantity(1)
userBasket.increaseQuantity(2, 2)
userBasket.deleteProduct(3)

alert(`Мы уменьшили количество 1-го товара на 1 единицу, увеличили количество 2-го товара на 2 единицы и удалили 3-ий товар.
Теперь в корзине лежат товары:
${userBasket.showBasket()}
Общая сумма: ${userBasket.sumPrices()}`)
