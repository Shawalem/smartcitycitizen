'use strict';

/**
 * jobs controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::jobs.jobs');
