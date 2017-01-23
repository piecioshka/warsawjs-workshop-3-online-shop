(function (window, document, undefined) {
    'use strict';

    class ProductListComponent {
        constructor() {
            this.bindings = {};
            this.controller = ProductListComponentController;
        }

        template() {
            return `
                <div
                    class="col s4"
                    ng-repeat="product in $ctrl.products track by $index">
                    <product
                        class="row" 
                        data-product-id="$index"></product>
                </div>
            `;
        }
    }

    class ProductListComponentController {
        constructor(ProductsService) {
            // console.debug('new ProductListComponentController');
            this.products = [];
            this.ProductsService = ProductsService;
        }

        $onInit() {
            this.ProductsService.$get()
                .then(({ data }) => {
                    this.products = this.products.concat(data);
                });
        }

        getProductByIndex(index) {
            return this.products[index];
        }
    }

    angular.module('shop')
        .component('productList', new ProductListComponent);
}(window, document));
