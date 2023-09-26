'use strict';

/**
 * special controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::verifieduser.verifieduser');
