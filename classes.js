'use strict'

export class Product {
    constructor(name, price, quantity = 1, discount = 1, id, categoryId, vendorСode, description, image, images, dateOfManufacture, shelfLife) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.discount = discount;
        this.id = id;
        this.categoryId = categoryId;
        this.vendorСode = vendorСode;
        this.description = description;
        this.image = image;
        this.images = images;
        this.dateOfManufacture = dateOfManufacture;
        this.shelfLife = shelfLife;
    }

    getResultPrice() {
        return this.price * this.quantity * this.discount;
    }

    getClearPrice() {
        return this.price * this.quantity;
    }

}

export class Basket {
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
        if (!product.quantity) {
            this.deleteProduct(id)
        }
    }

    sumPrices() {
        return this.basket.reduce(function (acc, product) {
            return acc + product.getClearPrice();
        }, 0);
    }

    sumQuantity() {
        return this.basket.reduce(function (acc, product) {
            return acc + product.quantity;
        }, 0);
    }
}