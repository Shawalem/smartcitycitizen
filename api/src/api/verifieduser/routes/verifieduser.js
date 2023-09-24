'use strict';

/**
 * special router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::verifieduser.verifieduser');
