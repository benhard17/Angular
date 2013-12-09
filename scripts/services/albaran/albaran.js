'use strict';

var albaranServices = angular.module('albaranServices', ['ngResource']);

appModule.factory('Albaran', ['$resource',
  function($resource){
    return $resource('baseURL/:.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
   