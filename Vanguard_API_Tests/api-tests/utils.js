"use strict";
var config = require('konfig')(),
    supertest = require('supertest-as-promised');

var utils = {

  getBaseUrl: function getBaseUrl() {
    return config.properties.baseUrl;
  },

  httpGET: function httpGET(url, additionalParams) {
    return supertest(utils.getBaseUrl())
        .get(url)
  },
};

module.exports = utils;
