'use strict';

/**
 * airquality service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::airquality.airquality');
