(function (window, document, undefined) {
    'use strict';

    class ProductAddToCartComponent {
        constructor() {
            this.controller = ProductAddToCartComponentController;
        }

        template() {
            return `
                <div class="row">
                    <span class="col s6 white-text">
                        Dodaj do koszyka
                    </span>
                    <label class="col s2">
                        <input
                            type="number"
                            value="0"
                            />
                    </label>
                    <input
                        class="col s2 btn"
                        type="submit"
                        ng-click="$ctrl.basket.add(this.product)"
                        value="+"
                        />
                    <input
                        class="col s2 btn"
                        type="submit"
                        ng-click="$ctrl.basket.add(this.product)"
                        value="-"
                        />
                </div>
                `;
        }
    }

    class ProductAddToCartComponentController {
        constructor() {
            // console.debug('new ProductAddToCartComponentController');
        }

        $onInit() {

        }
    }

    angular.module('shop')
        .component('productAddToCart', new ProductAddToCartComponent);
}(window, document));
