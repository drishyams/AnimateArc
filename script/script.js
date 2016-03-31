angular.module('AnimateArcApp', []);

angular.module('AnimateArcApp').controller('AnimateArcController', ['$scope', function($scope)
{
    $scope.TransferAmount = 400; // Total transfrred 
    $scope.CashBack = 200; // CashBack
    
    $scope.ProgressClass = "semi-circle-style-0";
    $scope.CashBackClass = "Rotate-0";
    
    $scope.PlotArc = function() { 

        var cashbackString;
        
        // Calculate the percentile amount and round it it a whole number .
        var CashPc = Math.round($scope.TransferAmount/500 * 100);

        var CashBackPercent = Math.round($scope.CashBack/500 * 100); //Get percentage of cashback from Total Amount

        $scope.ProgressClass = "semi-circle-style-" + CashBackPercent;
        $scope.CashBackClass = 'Rotate-' + CashPc;
    };
    
}]);