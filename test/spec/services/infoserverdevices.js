'use strict';

describe('Service: infoServerDevices', function () {

  // load the service's module
  beforeEach(module('appTestApp'));

  // instantiate service
  var infoServerDevices;
  beforeEach(inject(function (_infoServerDevices_) {
    infoServerDevices = _infoServerDevices_;
  }));

  it('should do something', function () {
    expect(!!infoServerDevices).toBe(true);
  });

});
