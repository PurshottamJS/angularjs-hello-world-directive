;
(function(window, angular, undefined) {
    'use strict';
    angular.module('app', ['app.common'])
}(window, angular, undefined));
;
(function(window, angular, undefined) {
    'use strict';
    angular.module('app.common', [])
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app')
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.common')
        .directive('helloWorld', helloWorld);
    helloWorld.$inject = [];

    function helloWorld() {
        return {
            restrict : "E",
            template : "<blockquote>Hello World! This text comes from a directive</blockquote>"
        }
    }
}(window, angular, undefined));
