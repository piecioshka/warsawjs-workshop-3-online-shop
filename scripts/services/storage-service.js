(function (window) {
    'use strict';

    class StorageService {
        constructor() {
        }

        read(name) {
            let data = window.localStorage.getItem(name);

            try {
                return JSON.parse(data);
            } catch (err) {
                console.warn(err);
                return [];
            }
        }

        save(name, data) {
            let serializedData = JSON.stringify(data);
            window.localStorage.setItem(name, serializedData);
        }
    }

    angular.module('shop')
        .service('StorageService', StorageService);
}(window));
