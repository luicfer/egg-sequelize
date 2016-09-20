'use strict';

const sequelize = require('./lib/sequelize');

module.exports = agent => {
  if (agent.config.sequelize.agent) sequelize(agent);
};
