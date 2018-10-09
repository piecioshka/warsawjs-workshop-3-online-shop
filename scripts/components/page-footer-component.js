(function () {
    'use strict';

    const TEMPLATE = `
        <footer class="row center-align">
            <h6 class="grey-text lighten-5">Copyright &copy; 2017</h6>
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
