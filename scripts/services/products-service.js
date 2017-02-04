(function (window) {
    'use strict';

    const HOST = window.location.host;
    // const HOST = 'piecioshka.pl';
    const URL = `http://${HOST}:2095/products`;

    function ProductsService($http) {
        return {
            $get() {
                return $http.get(URL);
            }
        };
    }

    angular.module('shop')
        .factory('ProductsService', ProductsService);
}(window));
