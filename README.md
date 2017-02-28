# warsawjs-workshop-3-online-shop

> Aplikacja testowa stworzona na potrzeby WarsawJS Workshop #3

![](http://warsawjs.com/assets/images/logo/logo-transparent-240x240.png)

## Jak uruchomić?

```
$ npm install
$ npm run build:mock
$ npm run start:mock-server
```

## Wymagania

* Angular v1.6.1
* Node.js v7+

## O czym opowiedzieć?

### Komponenty

* Wykorzystanie komponentów zamiast dyrektyw
* Definicja dyrektywy vs definicja komponentu
    * Typy dyrektyw: element, atrybut (pomijamy klasy i komentarze)
    * Różnice we właściwościach: https://docs.angularjs.org/guide/component#comparison-between-directive-definition-and-component-definition
* Każdy komponent posiada domyślnie izolowany `scope`
* Tworzenie komponentów (skróconej wersji dyrektyw) podobne jak w Angular 2
* Alias definicji kontrolera we właściwości `controller: FooCtrl as foo`
* Właściwość `bindings` jako skrót od `bindToController`
    - nazwa atrybut dyrektywy może być inna niż wewnętrzna nazwa właściwości
* Zależności komponentów poprzez wykorzystanie właściwości `require` w `$onInit`
    - w komponentach (v1.5) jest obiektem
    - w dyrektywach (v1.4) jest stringiem albo tablicą (i wtedy odwołanie 
    poprzez `$ctrl[0]`)
    - `^^` wyszukuję komponentów-rodziców
    - `^` na początku przeszukuje element, a potem wyszukuje
    komponentów-rodziców
    - od wersji v1.5.6 nie trzeba podawać nazwy komponentu jeśli jest 
    zdefiniowany klucz
* Przekazywanie parametrów do komponentów i dyrektyw (w `bindings`)
    - `<` - przekazywane przez wartość w jedną stronę (v1.5)
    - `@` - przekazywane przez wartość w jedną stronę (v1.5) wraz z 
    interpolacją wartości atrybutu DOM
    - `=` - przekazywane przez referencję dwukierunkowo
    - `&` - akcja?
* Nowe w v1.5
    * Nie trzeba używać już `controllerAs`, domyślnie obiekt kontrolera jest 
    dostępny w szablonie jako `$ctrl`
    * Zamiast `compile` jest `$onInit` w kontrolerze komponentu 
    * Kontroler nie jest wymagany przybudowanie komponentów - mamy komponenty 
    bezstanowe - tak jak w React-cie.

### Usługi

* Nowe w v1.6
    * Usługa `$http` nie posiada już funkcji `success` i `error`, tylko 
    `then` oraz `catch`.
* Różnica między `factory` i `service`
    - obie zwracają singletony
    - `factory`: zwraca obiekt
    - `service`: zwraca konstruktor, który zostanie użyty do stworzenia obiektu

### Inne

* Filtry uruchamiają się 2 razy podczas `$digest cycle`
* Tablica `$watchers` ma największy wpływ na wydajność

### Optymalizacje

* Wykorzystać `track by` przy `ng-repeat`, bez tego każdy dodany element 
do listy będzie powodował usunięcie obecnej listy i zbudowanie nowej 
(powiększonej tylko o jeden element).
* Jednorazowe przypisanie (wyklucza z listy `$watchers`)
* Wykorzystanie `ng-model-options` z v1.3, np. `debounce` przy wyszukiwarce
* Jawne przekazanie obiektów podczas Dependency Injection tj.
    `SomeController.$inject = ['$http', '$timeout];`
* Użycie dyrektywy `ng-bind` zamiast interpolacji (bez parsowania)
* Usunięcie informacji developerskich
    `$compileProvider.debugInfoEnabled(false)`
    - nie dodaje klas CSS do DOMa
    - jeśli zaistnieje potrzeba to uruchom `angular.reloadWithDebugInfo()`
* Nie używanie filtrów w DOMie - lepiej wykorzysta `$filter` w kontrolerze

## TODO LIST

* [x] Prezentacja listy produktów
* [x] Uruchomienie serwera do pobierania danych
* [x] Pobieranie listy produktów
* [x] Prezentacja zawartości koszyka
* [x] Dodawanie produktów do koszyka
* [x] Czyszczenie produktów z koszyka
* [x] Zapisywanie stanu koszyka w `localStorage`
* [x] Odczytywanie stanu koszyka z `localStorage`
* [ ] Obsługa błędów w sytuacji problemu z pobraniem listy produktów
* [ ] Usuwanie pojedynczych produktów z koszyka
* [ ] Filtrowanie listy produktów
* [ ] Paginacja listy produktów
* [ ] Routing

## Zadania dodatkowe

* Formularz płatności
* Drag and drop produktów do koszyka

## Przydatne linki

* http://materializecss.com/
* https://cdnjs.com/
* https://angularjs.org/

### Mockowanie danych

* http://json-schema-faker.js.org/
* https://github.com/json-schema-faker/json-schema-faker/
* http://chancejs.com/
* https://github.com/marak/Faker.js/

### Angular.js

* https://toddmotto.com/angular-1-6-is-here (v1.6)
* https://toddmotto.com/exploring-the-angular-1-5-component-method (v1.5)
* https://toddmotto.com/on-init-require-object-syntax-angular-component/ (v1.5)
* https://toddmotto.com/angular-1-5-lifecycle-hooks (v1.5 - tabs)
* https://toddmotto.com/directive-to-directive-communication-with-require (v1.4 - tabs)
* https://toddmotto.com/stateless-angular-components (v1.5.0-rc.0)
* https://toddmotto.com/a-better-way-to-scope-angular-extend-no-more-vm-this/
* http://bguiz.github.io/js-standards/angularjs/

## Misc

* https://www.binpress.com/tutorial/speeding-up-angular-js-with-simple-optimizations/135
* http://www.panda-os.com/blog/2015/01/angularjs-apply-digest-and-evalasync/
* https://www.superdesk.org/en/site/news/46/AngularJS-performance-tips.htm
