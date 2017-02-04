(function () {
    'use strict';

    const TEMPLATE = `
        <nav class="blue lighten-1">
            <div class="nav-wrapper">
                <form>
                    <div class="input-field">
                        <input
                                id="search"
                                type="search"
                                required
                                placeholder="Wpisz nazwę produktu..."
                        />
                        <label for="search">
                            <i class="material-icons">search</i>
                        </label>
                        <i class="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
        `;

    class ProductSearch {
        constructor() {
            this.controller = ProductSearchController;
            this.template = TEMPLATE;
        }
    }

    class ProductSearchController {
        constructor() {

        }
    }

    angular.module('shop')
        .component('productSearch', new ProductSearch);
}());
