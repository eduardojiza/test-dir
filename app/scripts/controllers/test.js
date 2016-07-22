'use strict';

/**
 * @ngdoc function
 * @name appTestApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the appTestApp
 */
angular.module('appTestApp')
  .controller('TestCtrl', function ($scope) {
  	$scope.hello = "hello world";
  	$scope.imprime = function(){
  		console.log($scope.hello);
  	}

  }).directive( 'wlSlider', function() {
  	return {
  		restrict: 'A',
  		scope:{
  			min : '=',
  			max : '=',
  			step : '=',
  			start : '=',
  			value : '&'
  		},
  		link: function( scope, element, attributes ) {
  			let slider = element[0];
			noUiSlider.create(slider, {
				start: scope.start,
				step: scope.step,
				connect: 'lower',
				range: {
				  'min': scope.min,
				  'max': scope.max
				}
			});

			slider.noUiSlider.on('update', function( values, handle ) {
				console.log( values[handle] );
				scope.value();
			});  			
  		}
  	}
  } );
