(function (window) {
    'use strict';

    const HOST = window.location.host;
    const URL = `http://${HOST}:2095/products`;

    angular.module('shop')
        .factory('ProductsService', function ($http) {
            return {
                $get() {
                    return $http.get(URL);
                }
            };
        })
}(window));
