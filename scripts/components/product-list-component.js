(function () {
    'use strict';

    const TEMPLATE = `
        <div
            class="col l4"
            ng-repeat="product in $ctrl.products track by $index"
            >
            <product
                class="row" 
                data-product-index="$index"></product>
        </div>

        <div
            class="col l12 red darken-3"
            ng-if="$ctrl.products.length === 0"
            >
            <p class="red-text text-lighten-5">
                Problem z załadowaniem danych z serwera.        
            </p>
        </div>
    `;

    class ProductListComponent {
        constructor() {
            this.bindings = {};
            this.controller = ProductListComponentController;
            this.template = TEMPLATE;
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
                })
                .catch((err) => {
                    console.error(err);
                });
        }

        getProductByIndex(index) {
            return this.products[index];
        }
    }

    angular.module('shop')
        .component('productList', new ProductListComponent);
}());
