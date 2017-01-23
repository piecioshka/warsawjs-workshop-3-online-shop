(function (window, document, undefined) {
    'use strict';

    class PageHeader {
        template() {
            return `
                <header>
                    <nav class="blue lighten-3">
                        <div class="nav-wrapper">
                            <a class="brand-logo">Sklep internetowy</a>
        
                            <ul class="right hide-on-med-and-down">
                                <li>
                                    <a href="">
                                        Koszyk
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
        
                    <nav class="blue lighten-1">
                        <div class="nav-wrapper">
                            <form>
                                <div class="input-field">
                                    <input
                                            id="search"
                                            type="search"
                                            required
                                            placeholder="Wpisz nazwę produktu"
                                    />
                                    <label for="search">
                                        <i class="material-icons">search</i>
                                    </label>
                                    <i class="material-icons">close</i>
                                </div>
                            </form>
                        </div>
                    </nav>
                </header>
            `;
        }
    }

    angular.module('shop')
        .component('pageHeader', new PageHeader)
}(window, document));
