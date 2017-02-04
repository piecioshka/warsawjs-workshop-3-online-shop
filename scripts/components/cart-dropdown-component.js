(function () {
    'use strict';

    const TEMPLATE = `
        <ul class="right">
            <li>
                <a class="dropdown-button" href="">
                    Koszyk ({{ $ctrl.getCartSize() }})
                    <i class="material-icons right">arrow_drop_down</i>
                </a>
                        
                <ul id="cart-dropdown-list" class="dropdown-content">
                    <li ng-repeat="item in $ctrl.cart track by $index">
                        <a href="">
                            {{ item.product.name }}
                            <span class="badge right">
                                {{ item.quantity }}x
                            </span>
                        </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="" ng-click="$ctrl.clearCart()">
                            Wyczyść koszyk
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    `;

    class CartDropdown {
        constructor() {
            this.controller = CartDropdownController;
            this.template = TEMPLATE;
        }
    }

    class CartDropdownController {
        constructor(CartService) {
            this.CartService = CartService;
            this.cart = CartService.getCart();

            CartService.onUpdate(() => {
                this.cart = CartService.getCart();
            });
        }

        getCartSize() {
            return this.CartService.getCartSize();
        }

        clearCart() {
            return this.CartService.clearCart();
        }
    }

    angular.module('shop')
        .component('cartDropdown', new CartDropdown);
}());
