(function () {
    'use strict';

    class ProductListComponent {
        constructor() {
            this.bindings = {};
            this.controller = ProductListComponentController;
        }

        template() {
            return `
                <div
                    class="col l4"
                    ng-repeat="product in $ctrl.products track by $index">
                    <product
                        class="row" 
                        data-product-index="$index"></product>
                </div>
            `;
        }
    }

    class ProductListComponentController {
        constructor(ProductsService) {
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
}());
