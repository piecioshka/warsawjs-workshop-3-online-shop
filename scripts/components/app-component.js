(function () {
    'use strict';

    class AppComponent {
        template() {
            return `
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
        }
    }

    angular.module('shop')
        .component('app', new AppComponent)
}());
