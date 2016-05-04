'use strict';

var controller = require('./imgScraper.controller');
var express = require('express');
var router = express.Router();
var auth = require('../../auth/auth.service');

router.post('/scraoe', auth.isAuthinticated(), controller.scrape);

module.exports = router;
