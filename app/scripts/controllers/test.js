'use strict';

/**
 * @ngdoc function
 * @name appTestApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the appTestApp
 */
angular.module('appTestApp')
  .controller('TestCtrl', function ($scope, infoServerDevices) {
    $scope.insert = function(){
      console.log($scope.nameDevice);
      console.log($scope.uriDevice);
      console.log($scope.typeDevice);
      let device = {
        name: $scope.nameDevice,
        uri: $scope.uriDevice, 
        type: $scope.typeDevice, 
      };      
      console.log( infoServerDevices.insert( device ) );
    }

    $scope.print = function() {
        console.log('En print');
        let devices = infoServerDevices.getAll();
        for( let device of devices ) {
          console.log( device );
        }
      }
  });
