(function () {
    'use strict';

    class CartService {
        constructor(CartStorageService) {
            this._listeners = [];
            this.CartStorageService = CartStorageService;
            this.cart = CartStorageService.read() || [];
        }

        getCart() {
            return this.cart;
        }

        getCartSize() {
            return this.cart.length;
        }

        appendCart(product, quantity) {
            // console.log('CartService#appendCart', product, quantity);
            let results = this.cart.find((item) => {
                return item.product.id === product.id
            });

            if (results) {
                results.quantity += quantity;
            } else {
                this.cart.push({
                    quantity,
                    product
                });
            }

            this._inform();
            this._save();
        }

        _inform() {
            this._listeners.forEach((cb) => cb.call(this, this.cart));
        }

        _save() {
            this.CartStorageService.save(this.cart);
        }

        clearCart() {
            this.cart = [];

            this._inform();
            this._save();
        }

        onUpdate(callback) {
            this._listeners.push(callback);
        }
    }

    angular.module('shop')
        .service('CartService', CartService);
}());
