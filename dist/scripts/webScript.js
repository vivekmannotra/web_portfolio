'use strict';
angular.module('index', ['ui.bootstrap', 'index.landPad', 'ngRoute', 'truncate']);

angular.module('index.landPad', []);
angular.module('index.landPad').controller('landPadController', landPadController);
landPadController.$inject = ['$location', 'masterFactory', '$filter', '$uibModal', '$scope', '$route', '$rootScope'];
function landPadController ($location, masterFactory, $filter, $uibModal, $scope, $route, $rootScope) {
    var lp = this;
    lp.message = 'This is the header of the page.';
}
'use strict';
angular.module('index').config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/home'
        })
        .when('/home', {
            templateUrl: 'modules/landPad/landPad.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
    $locationProvider.html5Mode(true);
    $httpProvider.defaults.headers.common["req-auth-token"] = '#^&SFHAH@Y%$H@$@$%HG$!$#B!$FBWTRBRTHTHRFHBWR@@%$T!SDFEWF@F@F@@ECW';

}]);
angular.module('index').factory('masterFactory', ['$http', '$location', function ($http, $location) {
    var api_root = window.location.origin;
    return {

    }
}]);
angular.module('index').filter('compoundFilter', ['$filter', function ($filter) {
    return function (array, text) {
        if (text) {
            var list = text.split(' ');
            for (var i = 0; i < list.length; i++) {
                array = $filter('filter')(array, list[i]);
            }
        }
        return array;
    };
}]);
angular.module('index').run(['$http', '$rootScope', '$uibModal', 'masterFactory', function ($http, $rootScope, $uibModal, masterFactory) {
    $http.defaults.headers.common['Content-Type'] = 'application/json';

}]);
angular.module('truncate', [])
    .filter('characters', function () {
        return function (input, chars, breakOnWord) {
            if (isNaN(chars)) return input;
            if (chars <= 0) return '';
            if (input && input.length > chars) {
                input = input.substring(0, chars);

                if (!breakOnWord) {
                    var lastspace = input.lastIndexOf(' ');
                    //get last space
                    if (lastspace !== -1) {
                        input = input.substr(0, lastspace);
                    }
                }else{
                    while(input.charAt(input.length-1) === ' '){
                        input = input.substr(0, input.length -1);
                    }
                }
                return input + '…';
            }
            return input;
        };
    })
    .filter('splitcharacters', function() {
        return function (input, chars) {
            if (isNaN(chars)) return input;
            if (chars <= 0) return '';
            if (input && input.length > chars) {
                var prefix = input.substring(0, chars/2);
                var postfix = input.substring(input.length-chars/2, input.length);
                return prefix + '...' + postfix;
            }
            return input;
        };
    })
    .filter('words', function () {
        return function (input, words) {
            if (isNaN(words)) return input;
            if (words <= 0) return '';
            if (input) {
                var inputWords = input.split(/\s+/);
                if (inputWords.length > words) {
                    input = inputWords.slice(0, words).join(' ') + '…';
                }
            }
            return input;
        };
    });
