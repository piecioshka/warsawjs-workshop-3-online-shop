(function () {
    'use strict';

    const TEMPLATE = `
        <section class="container">
            <page-header></page-header>
        
            <product-list class="row">
                <div class="progress">
                    <div class="indeterminate"></div>
                </div>
            </product-list>
        
            <page-footer></page-footer>
        </section>
    `;

    class AppComponent {
        constructor() {
            this.template = TEMPLATE;
        }
    }

    angular.module('shop')
        .component('app', new AppComponent);
}());
