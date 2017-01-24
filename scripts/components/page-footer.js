(function () {
    'use strict';

    class PageFooter {
        template() {
            return `
                <footer class="row center-align">
                    <h5>&copy; 2017 Copyright</h5>
                </footer>
            `;
        }
    }

    angular.module('shop')
        .component('pageFooter', new PageFooter);
}());
