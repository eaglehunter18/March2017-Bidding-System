/**
 * Created by hhamra on 3/14/2017.
 */
angular
    .module('myApp').controller('formCtrl',function($scope,QueryService,$route)
{

    $("#datetimepicker1").datetimepicker({

    })

// get not statred bids  from server
    QueryService.query('GET', 'api/v1/products/getUnstatrted', {})
        .then(function(data) {
            //console.log(data);
            $scope.myData=data.data;
        }, function(error) {
            console.log(error);
        });

//push new bids to our table

   $scope.bids=[];
   $scope.myData=$scope.bids;

    $scope.addRow = function(){
        var newBid={
            'productName':$scope.productName,
            'productDesc': $scope.productDesc,
            'startTime':$scope.startTime,
            'period': $scope.period,
            'incUnit':$scope.incUnit ,
            'price':$scope.price ,
            'status':$scope.checkboxmodel
        };
        if($scope.checkboxmodel != true) {
            $scope.myData.push(newBid);
            console.log('test');
          //  $route.reload();
        }
        var newBid1={
            name:$scope.productName,
            desc: $scope.productDesc,
            startTime:$scope.startTime,
            period: $scope.period,
            startTime:$scope.startTime,
            incUnit:$scope.incUnit ,
            price:$scope.price,
            status:$scope.checkboxmodel
        };



        QueryService.query('POST', 'api/v1/products/addProduct', newBid1)
            .then(function(data) {
                console.log(data);
               // $route.reload();
            }, function(error) {
                console.log(error);
            });


//empty scope for next  bid
        $scope.productName='';
        $scope.productDesc='';
        $scope.startTime='';
        $scope.period='';
        $scope.startTime='';
        $scope.incUnit='';

        $('#myModal').modal('hide');
    };

$scope.changeToStarted=function (index) {

    var bidId={
        id:$scope.myData[index].id,
    };


    QueryService.query('POST', 'api/v1/products/changeToStarted',bidId )
        .then(function(data) {
            console.log(data);
            $route.reload();
        }, function(error) {
            console.log(error);
        });


}

    // console.log("testttttttttttttttt");
    // $('#submit').click(function() {
    //
    //     $('#myModal').modal('hide');
    // });

});