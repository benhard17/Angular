'use strict';

function DetalleAlbaranCtrl ($scope,$filter,$routeParams,ngTableParams) {
    

	$scope.lineas= [{'id':'1','Q':'Qb'},{'id':'2','Q':'Qb'},{'id':'3','Q':'Qb'}];

    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            name: 'asc'     // initial sorting
        }
    }, {
    	 counts: [], // hide page counts control
        total: $scope.lineas.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.sorting() ?
                                $filter('orderBy')($scope.lineas, params.orderBy()) :
                                data;
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });

    


    

    $scope.checkboxes = { 'checked': false, items: {} };
    // watch for check all checkbox
    $scope.$watch('checkboxes.checked', function(value) {
        angular.forEach($scope.lineas, function(item) {
            if (angular.isDefined(item.id)) {
                $scope.checkboxes.items[item.id] = value;
            }
        });
    });
    // watch for data checkboxes
    $scope.$watch('checkboxes.items', function(values) {
        if (!$scope.lineas) {
            return;
        }
        var checked = 0, unchecked = 0,
            total = $scope.lineas.length;
        angular.forEach($scope.lineas, function(item) {
            checked   +=  ($scope.checkboxes.items[item.id]) || 0;
            unchecked += (!$scope.checkboxes.items[item.id]) || 0;
        });
        if ((unchecked == 0) || (checked == 0)) {
            $scope.checkboxes.checked = (checked == total);
        }
        // grayed checkbox
        angular.element(document.getElementById("select_all")).prop("indeterminate", (checked != 0 && unchecked != 0));
    }, true);
 };
