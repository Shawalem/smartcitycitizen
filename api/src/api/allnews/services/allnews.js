'use strict';

/**
 * allnews service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::allnews.allnews');
