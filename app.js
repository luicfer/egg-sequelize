'use strict';

const sequelize = require('./lib/sequelize');

module.exports = app => {
  if (app.config.sequelize.app) sequelize(app);
};
