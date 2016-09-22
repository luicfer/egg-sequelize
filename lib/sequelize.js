'use strict';

const assert = require('assert');
const Sequelize = require('sequelize');
const co = require('co');
let count = 0;

module.exports = function (app) {
  app.addSingleton('sequelize', create);
};

function create(config, app) {
  const index = count++;
  const done = app.readyCallback(`createMysql-${index}`);
  app.coreLogger.info('[egg-sequelize] connecting %s@%s:%s/%s',
    config.user, config.host, config.port, config.database);
  assert(config.host && config.port && config.user && config.database,
    `[egg-sequelize] 'host: ${config.host}', 'port: ${config.port}', 'user: ${config.user}', 'database: ${config.database}' are required on config`);
  const option = Object.assign({}, {
    logging: function (v) {
      app.coreLogger.info(`[egg-sequelize] ${v}`);
    },
  }, config.option, {host: config.host, port: config.port});
  const sequelize = new Sequelize(config.database, config.user, config.password, option);

  co(function*() {
    yield sequelize.authenticate();
    app.coreLogger.info(`[egg-sequelize] instance[${index}] status OK`);
    done();
  }).catch(err => {
    app.coreLogger.error(err);
    done(err);
  });
  return sequelize;
}
