# warsawjs-workshop-3-shop-online

> Aplikacja testowa stworzona na potrzeby WarsawJS Workshop #3

![](http://warsawjs.com/assets/images/logo/logo-transparent-240x240.png)

## Jak uruchomić?

```
$ npm run build:mock
$ npm run start:mock-server
```

## Wymagania

* Angular v1.6.1
* Zainstalowany Node.js v7+
* Paczki zainstalowane globalnie:
    - `json-server`
    - `http-server`

## O czym opowiedzieć?

* Wykorzystanie komponentów zamiast dyrektyw
* Definicja dyrektywy vs definicja komponentu
* Każdy komponent posiada domyślnie izolowany `scope`
* Tworzenie komponentów (skróconej wersji dyrektyw) podobnej jak w Angular 2
* Alias definicji kontrolera we właściwości `controller: FooCtrl as foo`
* Właściwość `bindings` jako skrót od `bindToController`
    - nazwa atrybut dyrektywy może być inna niż wewnętrzna nazwa właściwości
* Jednokierunkowe przypisanie `<`, dwukierunkowe `=` (w `bindings`)
* Nowe w v1.5
    * Zamiast `compile` jest `$onInit` w kontrolerze komponentu 
    * Kontroler nie jest wymagany przybudowanie komponentów - mamy komponenty 
    bezstanowe - tak jak w React-cie.
* Optymalizacje
    * Wykorzystać `track by` przy `ng-repeat`, bez tego każdy dodany element 
    do listy będzie powodował usunięcie obecnej listy i zbudowanie nowej 
    (powiększonej tylko o jeden element).
    * Jednorazowe przypisanie (wyklucza z listy `$watchers`)
    * Wykorzystanie `ng-model-options` z v1.3, np. `debounce` przy wyszukiwarce
    * Skorzystanie z `$rollbackViewValue` wycofanie zmian z modelu
    * Walidacja z użyciem `ngModel.$validators`
    * Jawne przekazanie obiektów podczas Dependency Injection tj.
        `SomeController.$inject = ['$http', '$timeout];`
    * Użycie dyrektywy `ng-bind` zamiast interpolacji (bez parsowania)
    * Ustawienie w konfiguracji modułu `$httpProvider.userApplyAsync(true)`
    * Usunięcie informacji developerskich
        `$compileProvider.debugInfoEnabled(false)`
        - nie dodaje klas CSS do DOMa
        - jeśli zaistnieje potrzeba to uruchom `angular.reloadWithDebugInfo()`
    * Nie używanie filtrów w DOMie - lepiej wykorzysta `$filter` w kontrolerze
* Filtry uruchamiają się 2 razy podczas `$digest cycle`
* `$watchers` ma największy wpływ na wydajność
* Zależności komponentów poprzez wykorzystanie właściwości `require` w `$onInit`
    - w komponentach (v1.5) jest obiektem
    - w dyrektywach (v1.4) jest stringiem albo tablicą (i wtedy odwołanie 
    poprzez `$ctrl[0]`)
    - `^^` wyszukuję komponentów-rodziców
    - `^` na początku przeszukuje element, a potem wyszukuje
    komponentów-rodziców
    - od wersji v1.5.6 nie trzeba podawać nazwy komponentu jeśli jest 
    zdefiniowany klucz
* Typy dyrektyw: element, atrybut (pomijamy klasy i komentarze)
* Przekazywanie parametrów do komponentów i dyrektyw:
    - `@` - przekazywane przez wartość w jedną stronę
    - `=` - przekazywane przez referencję dwukierunkowo
    - `&` - akcja?

## Proste błędy

* Nazwa komponentu w definicji (*.js) wg konwencji `camelCase`
* Odwołując się do właściwości stworzonej w kontrolerze używamy `$ctrl.PROPERTY`

## TODO LIST

* Prezentacja listy produktów
    - Paginacja
    - Filtrowanie
* Pobieranie listy produktów
    - Uruchomienie serwera do pobierania danych
* Routing
* Dodawanie produktów do koszyka
* Usuwanie produktów z koszyka
* Wyszukiwarka
* Obsługa błędów

## Zadania dodatkowe

* Formularz płatności
* Drag and drop produktów do koszyka

## Przydatne linki

* https://cdnjs.com/

### Mockowanie danych

* http://json-schema-faker.js.org/
* https://github.com/json-schema-faker/json-schema-faker
* http://chancejs.com/
* https://github.com/marak/Faker.js/

### Angular.js

* https://angularjs.org/
* https://toddmotto.com/angular-1-6-is-here
* https://toddmotto.com/exploring-the-angular-1-5-component-method (v1.5)
* https://toddmotto.com/on-init-require-object-syntax-angular-component/ (v1.5)
* https://toddmotto.com/angular-1-5-lifecycle-hooks (v1.5 - tabs)
* https://toddmotto.com/directive-to-directive-communication-with-require (v1.4 - tabs)
* https://toddmotto.com/stateless-angular-components (v1.5.0-rc.0)
