(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope' , 'QueryService','$location'];

    function LoginController($scope,QueryService,$location) {

        $scope.loginErrorText = '';
        $scope.loginError = false;

        $scope.login = function () {
            var credentials = {
                name: $scope.name,
                pass: $scope.pass
            }

            QueryService.query('POST', 'api/v1/user/login', credentials)
                .then(function(data) {

                    if (data.data == "200") {
                        // $location.path("/api/v1/products/");
                        // $window.location.href = '/api/v1/products/Uindex';
                       $location.path("/all-bids-user");
                        console.log(data.data);
                    } else {
                       console.log(data);
                        $scope.loginError = true;
                        $scope.loginErrorText = data.data;

                    }
                }, function(error) {
                    console.log(error);
                });


        }

    }
})();
















//
//
// angular.module('boilerplate')
//     .controller('LoginController', [ 'QueryService' ,   function ($scope,QueryService) {
//         $scope.loginErrorText = '';
//         $scope.loginError = false;
//         console.log('test1');
//         $scope.login = function () {
//             var credentials = {
//                 name: $scope.name,
//                 pass: $scope.pass
//             }
//
//             console.log(credentials);
//             QueryService.query('post', 'api/v1/products/login', {get: query}, {post: params})
//                 .then(function(data) {
//                     console.log(data);
//                 }, function(error) {
//                     console.log(error);
//                 });
//
//
//         }
//     }]);
//
//
//






//
//
//
// angular
//     .module('boilerplate')
//     .controller('LoginController', LoginController);
//
// LoginController.$inject = [ 'QueryService'];
// function LoginController(QueryService) {
//     $scope.loginErrorText = '';
//     $scope.loginError = false;
//     console.log('test1');
//     $scope.login = function () {
//         var credentials = {
//             name: $scope.name,
//             pass: $scope.pass
//         }
//         console.log(credentials);
//
//
//     }
// }
//
//






//
// angular.module('boilerplate', [])
//     .controller('LoginController', [ 'QueryService' ,   function ($scope,QueryService) {
//         $scope.loginErrorText = '';
//         $scope.loginError = false;
//         console.log('test1');
//         $scope.login = function () {
//             var credentials = {
//                 name: $scope.name,
//                 pass: $scope.pass
//             }
//             console.log(credentials);
//
//
//         }
//     }]);
//
//
