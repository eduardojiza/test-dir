'use strict';

describe('Service: infoServer', function () {

  // load the service's module
  beforeEach(module('appTestApp'));

  // instantiate service
  var infoServer;
  beforeEach(inject(function (_infoServer_) {
    infoServer = _infoServer_;
  }));

  it('should do something', function () {
    expect(!!infoServer).toBe(true);
  });

});
