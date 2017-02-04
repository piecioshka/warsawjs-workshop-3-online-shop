(function () {
    'use strict';

    class ProductComponent {
        constructor() {
            this.bindings = {
                productIndex: '='
            };
            this.require = {
                productList: '^^'
            };
            this.controller = ProductComponentController;
        }

        template() {
            return `
                <div class="card small blue-grey darken-1">
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
            this.product = null;
        }

        $onInit() {
            this.product = this.productList.getProductByIndex(this.productIndex);
        }
    }

    angular.module('shop')
        .component('product', new ProductComponent);
}());
