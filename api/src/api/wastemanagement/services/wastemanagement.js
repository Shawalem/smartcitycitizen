'use strict';

/**
 * wastemanagement service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wastemanagement.wastemanagement');
