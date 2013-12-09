'use strict';

appModule.factory('onlineStatus', ["$window",  "$modal", "$rootScope", function ($window ,$modal, $rootScope) {
    var onlineStatus = {};

    onlineStatus.onLine = $window.navigator.onLine;
    var modalInstance;
    onlineStatus.isOnline = function() {
        return onlineStatus.onLine;
    }

    $window.addEventListener("online", function () {
        onlineStatus.onLine = true;
        $rootScope.$digest();
        alert("Conected");
        modalInstance.close();
    }, true);

    $window.addEventListener("offline", function () {
        onlineStatus.onLine = false;
        $rootScope.$digest();
         modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: ModalInstanceCtrl
          });
    }, true);

    return onlineStatus;
}]);
    

appModule.factory('storage', function($rootScope, $http, LocalStorage) {
  var currentStorage;
  $rootScope.$on('onlineChanged', function(evt, isOnline) {
    currentStorage = isOnline ? $http : LocalStorage
  });
});


var ModalInstanceCtrl = function ($scope, $modalInstance) {


  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};