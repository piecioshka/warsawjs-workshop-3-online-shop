(function () {
    'use strict';

    const TEMPLATE = `
        <footer class="row center-align">
            <h6 class="grey-text lighten-5">&copy; 2017 Copyright</h6>
        </footer>
    `;

    class PageFooter {
        constructor() {
            this.template = TEMPLATE;
        }
    }

    angular.module('shop')
        .component('pageFooter', new PageFooter);
}());
