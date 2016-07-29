'use strict';

/**
 * @ngdoc service
 * @name appTestApp.infoServerDevices
 * @description
 * # infoServerDevices
 * Service in the appTestApp.
 */
angular.module('appTestApp')
  .service('infoServerDevices', function ( localStorageService ) {
  	let service = {};

  	function exist( key ) {
  		let lsKeys = localStorageService.keys();
  		return ( lsKeys.indexOf( key ) == -1 ) ? false : true;
  	}

  	/**
  	 * [insert description]
  	 * @param  device  let device = { name: , uri: , type:, };
  	 * @return -1 exist, 0 ERROR with insert, 1 insert OK
  	 */
  	service.insert = function( device ) {
  		let value = 0;
  		let infoDevice = { uri: device.uri, type: device.type };

  		if( !exist( device.name ) ) {
			value = ( localStorageService.set(device.name, infoDevice) ) ? 1 : 0;
  		} else {
  			value = -1;
  		}

     	
      	return value;
  	};

  	/**
  	 * [getAll get all devices]
  	 * @return array devices
  	 */
  	service.getAll = function() {
  		let result = [];
  		let key;
  		let infoDevice;
  		let lsKeys = localStorageService.keys();
  		for( let i = 0; i < lsKeys.length; i++ ) {
  			key = lsKeys[ i ];
  			infoDevice = localStorageService.get( key );
  			let device = { name: lsKeys, uri: infoDevice.uri, type: infoDevice.type };
  			result.push( device );
  		}

  		return result;
  	}
	/**
	 * [truncate delete all]
	 * @return true or false id delte was successfull
	 */
  	service.truncate = function() {
  		return localStorageService.clearAll();
  	}

  	return service;
  }).config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('whileApp')
    .setStorageType('localStorage')
    .setNotify(true, true)
});;
