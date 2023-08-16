'use strict';

/**
 * urbanspace service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::adpanel.adpanel');
