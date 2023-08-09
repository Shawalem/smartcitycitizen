'use strict';

/**
 * solarpower service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::solarpower.solarpower');
