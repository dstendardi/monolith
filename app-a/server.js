"use strict";

const app = module.exports = require('koa')();

const consul = require('consul')({
  host: process.env['CONSUL_PORT_8500_TCP_ADDR'],
  port: process.env['CONSUL_PORT_8500_TCP_PORT'],
  promisify: true
});

const request = require('node-consul-discover/discover-request')({
  consul: consul,
  service: 'monolithicrepository_service-a'
});

app.use(function *() {
  let content = yield request(request => request.get("/"));
  this.body = "from service a : " + content;
});

if (!module.parent) app.listen(3000);
