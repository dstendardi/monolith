"use strict";

const app = require('koa')();

const consul = require('consul')({
  host: process.env['CONSUL_PORT_8500_TCP_ADDR'],
  port: process.env['CONSUL_PORT_8500_TCP_PORT'],
  promisify: true
});

const dynamo = require('node-consul-discover/discover-dynamodb')({
  consul: consul,
  service: 'dynamodb-local'
});

app.use(function *() {
  this.body = yield dynamo(dynamo => dynamo.listTables());
});

app.listen(3000);
