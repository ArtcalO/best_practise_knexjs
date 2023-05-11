const knex =  require('knex');

const knexfile = require('./knexfile');

const db = knex(knexfile.developpement);

module.exports = db;