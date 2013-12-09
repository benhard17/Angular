'use strict';

appModule.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: ''
      });
	  $routeProvider.when('/entradaAlbaran', {
        templateUrl: 'views/entradaAlbaran/entradaAlbaran.html',
        controller: 'EntradaAlbaranCtrl'
      });
	   $routeProvider.when('/detalleAlbaran/:id', {
        templateUrl: 'views/detalleAlbaran/detalleAlbaran.html',
        controller: 'DetalleAlbaranCtrl'
      });
      $routeProvider.otherwise({
        redirectTo: '/'
      });
  });
