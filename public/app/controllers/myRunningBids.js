/**
 * Created by hhamra on 3/15/2017.
 */
var app=angular.module('myApp');

app.controller('myRunningBids',myRunningBids);
function myRunningBids($scope,QueryService)
{

    QueryService.query('GET', 'api/v1/products/mybids', {})
        .then(function(data) {
            console.log(data.data);
            $scope.myData=data.data;
        }, function(error) {
            console.log(error);
        });

}