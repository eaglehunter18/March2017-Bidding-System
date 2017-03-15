/**
 * Created by hhamra on 3/15/2017.
 */
var app=angular.module('myApp');

app.controller('myClosedBids',myClosedBids);
function myClosedBids($scope,QueryService)
{

    QueryService.query('GET', 'api/v1/products/myclosedbids', {})
        .then(function(data) {
            if( data.isEmpty() ){
                console.log( 'empty' );
            }
            console.log(data.data);
            $scope.myData=data.data;
        }, function(error) {
            console.log(error);
        });

}