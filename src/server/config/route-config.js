(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const users = require('../routes/users');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/api/v1/users', users);

  };

})(module.exports);
