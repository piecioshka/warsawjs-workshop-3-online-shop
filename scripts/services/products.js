(function () {
    'use strict';

    const URL = 'http://localhost:2095/products';

    angular.module('shop')
        .factory('ProductsService', function ($http) {
            return {
                $get() {
                    return $http.get(URL);
                }
            };
        })
}());
