
;(function() {
var app=angular.module("myApp",['ngRoute']);

app.config(function($routeProvider,$httpProvider){

    $routeProvider
        .when('/', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController',
            css: ['css/css.css','css/style.css'],
            controllerAs: 'main'
        })
        .when('/new-bid', {
            templateUrl: 'partials/newBidAdmin.html',
            controller: 'formCtrl',
            controllerAs: 'main'
        })
        .when('/running-bids-admin', {
            templateUrl: 'partials/runningBidsAdmin.html',
            controller: 'AdminRunningBidsCtrl',
            controllerAs: 'main'
        })
        .when('/closed-bids-admin', {
            templateUrl: 'partials/closedBidsAdmin.html',
            controller: 'AdminClosedBidsCtrl',
            controllerAs: 'main'
        })
        .when('/history-admin', {
            templateUrl: 'partials/historyAdmin.html',
            controller: 'historyCtrl',
            controllerAs: 'main'
        })
        .when('/all-bids-user', {
            templateUrl: 'partials/allBidsUser.html',
            controller: 'user',
            controllerAs: 'main'
        })
        .when('/opened-bids-user', {
            templateUrl: 'partials/openedBidsUser.html',
            controller: 'myRunningBids',
            controllerAs: 'main'
        })
        .when('/closed-bids-user', {
            templateUrl: 'partials/closedBidsUser.html',
            controller: 'myClosedBids',
            controllerAs: 'main'
        })
        .when('/login',{
            templateUrl:"partials/login.html",
            controller:"LoginController",
            css: ['css/css.css','css/style.css'],
            controllerAs: 'main'
        })


        .otherwise({
            redirectTo:'/'
        });


    $httpProvider.interceptors.push('authInterceptor');

});
angular
    .module('myApp')
    .factory('authInterceptor', authInterceptor);

authInterceptor.$inject = ['$rootScope', '$q', '$location'];

function authInterceptor($rootScope, $q, LocalStorage, $location) {

    return {

        // intercept every request
        request: function(config) {
            config.headers = config.headers || {};
            return config;
        },

        // Catch 404 errors
        responseError: function(response) {
            if (response.status === 404) {
                $location.path('/');
                return $q.reject(response);
            } else {
                return $q.reject(response);
            }
        }
    };
}
/**
 * Run block
 */
angular
    .module('myApp')
    .run(run);

run.$inject = ['$rootScope', '$location'];

function run($rootScope, $location) {

    // put here everything that you need to run on page load

}
})();