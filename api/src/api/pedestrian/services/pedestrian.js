'use strict';

/**
 * pedestrian service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pedestrian.pedestrian');
