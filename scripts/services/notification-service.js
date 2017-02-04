(function () {
    'use strict';

    class NotificationService {
        constructor() {
            this._listeners = {};
        }

        emit(name, payload) {
            if (!this._listeners[name]) {
                return;
            }

            this._listeners[name].forEach((cb) => cb(payload));
        }

        on(name, callback) {
            if (!this._listeners[name]) {
                this._listeners[name] = [];
            }
            this._listeners[name].push(callback);
        }
    }

    angular.module('shop')
        .service('NotificationService', NotificationService);
}());
