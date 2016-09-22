# egg-sequelize

egg plugin for sequelize

## Install

```bash
$ npm i egg-sequelize

# And one of the following:
$ npm install --save pg pg-hstore
$ npm install --save mysql // For both mysql and mariadb dialects
$ npm install --save sqlite3
$ npm install --save tedious // MSSQL

```

## Configuration

Change `${app_root}/config/plugin.js` to enable Sequelize plugin:

```js
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
```

Configure database information in `${app_root}/config/config.default.js`:


### Simple database instance

```js
exports.sequelize = {
  // database configuration
  client: {
    // host
    host: 'sequelize.com',
    // port
    port: '3306',
    // username
    user: 'mobile_pub',
    // password
    password: 'password',
    // database
    database: 'mobile_pub',
    option:{
      // see sequelize doc http://sequelize.readthedocs.io/en/v3/api/sequelize/
    },
  },
  // load into app, default is open 
  app: true,
  // load into agent, default is close
  agent: false,
};
```

Usage:

```js
app.sequelize.define(); 
```


### Multiple database instance

```js
exports.sequelize = {
  clients: {
    // clientId, access the client instance by app.sequelize.get('clientId')
    db1: {
      // host
      host: 'sequelize.com',
      // port
      port: '3306',
      // username
      user: 'mobile_pub',
      // password
      password: 'password',
      // database
      database: 'mobile_pub',
      option:{
            // see sequelize doc http://sequelize.readthedocs.io/en/v3/api/sequelize/
      },
    },
    // ...
  },
  // default configuration for all databases
  default: {

  },

  // load into app, default is open 
  app: true,
  // load into agent, default is close
  agent: false,
};
```

Usage:

```js
const client1 = app.sequelize.get('client1');
client1.define()

const client2 = app.sequelize.get('client2');
client2.define()
```


## Questions & Suggestions

Please open an issue 

## License

[MIT](LICENSE)
