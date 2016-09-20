'use strict';

/**
 * sequelize default config
 * @member Config#sequelize
 * @property {String} SOME_KEY - some description
 */
exports.sequelize = {
  // 在 app 上初始化
  app: true,
  // 在 agent 上初始化
  agent: false,
  // 单数据库
  // client: {
  //   host: 'host',
  //   port: 'port',
  //   user: 'user',
  //   password: 'password',
  //   database: 'database',
  // },
  // 多数据库
  // clients: {
  //   db1: {
  //     host: 'host',
  //     port: 'port',
  //     user: 'user',
  //     password: 'password',
  //     database: 'database',
  //   },
  //   db2: {
  //     host: 'host',
  //     port: 'port',
  //     user: 'user',
  //     password: 'password',
  //     database: 'database',
  //   },
  // },
};
