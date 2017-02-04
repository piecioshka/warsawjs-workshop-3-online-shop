(function () {
    'use strict';

    const TEMPLATE = `
        <form 
            class="row"
            ng-submit="$ctrl.onSubmitHandler()"
            >
            <input
                type="submit"
                class="col s8 left btn white-text"
                value="Do koszyka"
            />
            <input
                type="text"
                max="9"
                min="0"
                class="col s3 right blue-grey lighten-5 black center-align"
                ng-model="$ctrl.quantity"
                ng-blur="$ctrl.onBlurHandler()"
                required
            />
        </form>
    `;

    class ProductAddToCartComponent {
        constructor() {
            this.require = {
                parent: '^^product'
            };
            this.controller = ProductAddToCartComponentController;
            this.template = TEMPLATE;
        }
    }

    class ProductAddToCartComponentController {
        constructor(CartService) {
            this.quantity = 1;
            this.CartService = CartService;
        }

        onBlurHandler() {
            if (this.quantity > 9) {
                this.quantity = 9;
            }

            if (this.quantity < 1) {
                this.quantity = 1;
            }
        }

        onSubmitHandler() {
            this.CartService.appendCart(this.parent.product, this.quantity);
        }
    }

    angular.module('shop')
        .component('productAddToCart', new ProductAddToCartComponent);
}());
