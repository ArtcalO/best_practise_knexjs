const {knexSnakeCaseMappers} = require('objection');

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'receipt_db',
      user:     'postgres',
      password: "root",
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
    seeds:{
      directory:'./seeds'
    },
    ...knexSnakeCaseMappers,
  },

};
