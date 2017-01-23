(function (window, document, undefined) {
    'use strict';

    angular.module('shop')
        .factory('ProductsService', function ($http) {
            const URL = 'http://localhost:3000/products';

            return {
                $get() {
                    return $http.get(URL);
                }
            };
        })
}(window, document));
