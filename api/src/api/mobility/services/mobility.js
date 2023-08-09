'use strict';

/**
 * mobility service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mobility.mobility');
