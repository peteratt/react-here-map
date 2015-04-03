'use strict';

var ReactHereMapApp = require('./ReactHereMapApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={ReactHereMapApp}>
    <Route name="/" handler={ReactHereMapApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
