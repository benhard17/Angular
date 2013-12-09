'use strict';

angular.module('angularApp')
.controller('MainCtrl', ['$rootScope', '$scope', 'onlineStatus' ,
  function ($rootScope, $scope, onlineStatus,storage) {
      $scope.onlineStatus = onlineStatus;
    
    $scope.$watch('onlineStatus.isOnline()', function(online) {
        $scope.online_status_string = online ? 'online' : 'offline';
    });
    
  }]);


var albaranes=[{'proveedor':'AAAA','codAlbaran':'ALB1', 'fecha':'12/09/2013', 'estado':'A', 'transportista':'trans1', 'albTransportista':'ALBTRANS', 'coste':'99'}];
