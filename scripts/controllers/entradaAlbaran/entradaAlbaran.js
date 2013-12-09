'use strict';

function EntradaAlbaranCtrl ($scope,$filter,ngTableParams) {
    
	var data=albaranes;
    console.log(sessionStorage.getItem('search'));
    if(sessionStorage.getItem('search')!=null){
     $scope.alb=JSON.parse(sessionStorage.getItem('search'));
    }
	$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            name: 'asc'     // initial sorting
        }
    }, {
    	 counts: [], // hide page counts control
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.sorting() ?
                                $filter('orderBy')(data, params.orderBy()) :
                                data;
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
	$scope.search= function(){
		$scope.alb=albaranes[0];  
        sessionStorage.setItem('search',JSON.stringify($scope.alb));
     
	}

    $scope.myFunct = function(ev) {
      console.log(ev.which);
      if (ev.which==13)
        alert('Im a lert');
    }
 };
