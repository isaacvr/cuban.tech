var myApp = angular.module('cubantech', []);

myApp.controller('cubantechController', [
  '$scope',
  '$window',
  function($scope, $window) {

    $scope.config = $window.GENERAL_CONFIG;
    $scope.lang = $scope.config.lang;

    $window.addEventListener('hashchange', function() {
      $scope.$apply(function() {
        var nlang = $window.location.hash.substr(1, 100);
        if ( $scope.config.langList.indexOf(nlang) > -1 ) {
          $scope.lang = nlang;
        }

      });
    }, false);

  }
]);