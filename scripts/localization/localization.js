'use strict';

appModule.controller('localizationCtrl', ['$translate', '$scope', function ($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    $translate.uses(langKey);
  };
}]);
  
 appModule.config(['$translateProvider', function($translateProvider) {
	$translateProvider.translations('es', {
    HEADLINE: 'Hello there, This is my awesome app!',
    INTRO_TEXT: 'And it has i18n support!'
	});
	$translateProvider.preferredLanguage('es');
  }]);
