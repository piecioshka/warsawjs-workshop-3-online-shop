(function () {
    'use strict';

    const DEFAULT_KEY_NAME = 'cart';

    class CartStorageService {
        constructor() {
            this.key = DEFAULT_KEY_NAME;
        }

        read() {
            let data = localStorage.getItem(this.key);

            try {
                return JSON.parse(data);
            } catch (e) {
                return null;
            }
        }

        save(data) {
            localStorage.setItem(this.key, JSON.stringify(data));
        }
    }

    angular.module('shop')
        .service('CartStorageService', CartStorageService)
}());
