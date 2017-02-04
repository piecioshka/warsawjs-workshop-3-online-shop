(function () {
    'use strict';

    angular.module('shop', [])
        .config(function ($compileProvider) {
            $compileProvider.debugInfoEnabled(false);
        });
}());
