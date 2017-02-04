(function () {
    'use strict';

    const TEMPLATE = `
        <footer class="row center-align">
            <h5>&copy; 2017 Copyright</h5>
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
