'use strict';

/**
 * latestweb service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::latestweb.latestweb');
