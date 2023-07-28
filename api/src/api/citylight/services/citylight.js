'use strict';

/**
 * citylight service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::citylight.citylight');
