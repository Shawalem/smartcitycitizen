'use strict';

/**
 * prodcast service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::prodcast.prodcast');
