'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var ReactHereMapApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactHereMapApp = require('components/ReactHereMapApp.js');
    component = React.createElement(ReactHereMapApp);
  });

  it('should create a new instance of ReactHereMapApp', function () {
    expect(component).toBeDefined();
  });
});
