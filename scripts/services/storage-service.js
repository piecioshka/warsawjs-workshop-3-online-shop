(function (window) {
    'use strict';

    angular.module('shop')
        .factory('StorageService', function () {
            return {
                read(name) {
                    let data = window.localStorage.getItem(name);

                    try {
                        return JSON.parse(data);
                    } catch (err) {
                        console.warn(err);
                        return [];
                    }
                },

                save(name, data) {
                    let serializedData = JSON.stringify(data);
                    window.localStorage.setItem(name, serializedData);
                }
            };
        });
}(window));
