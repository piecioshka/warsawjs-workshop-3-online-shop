(function (window, document, undefined) {
    'use strict';

    class ProductComponent {
        constructor() {
            this.bindings = {
                productId: '='
            };
            this.require = {
                productList: '^^'
            };
            this.controller = ProductComponentController;
        }

        template() {
            return `
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <h6 class="card-title">{{ $ctrl.product.name }}</h6>
                        <p>{{ $ctrl.product.description }}</p>
                    </div>
                    <div class="card-action">
                        <product-add-to-cart></product-add-to-cart>
                    </div>
                </div>
            `;
        }
    }

    class ProductComponentController {
        constructor() {
            // console.debug('new ProductComponentController');
            this.product = null;
        }

        $onInit() {
            this.product = this.productList.getProductByIndex(this.productId);
        }
    }

    angular.module('shop')
        .component('product', new ProductComponent);
}(window, document));
