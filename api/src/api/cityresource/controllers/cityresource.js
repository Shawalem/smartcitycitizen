'use strict';

/**
 * cityresource controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cityresource.cityresource');





// 'use strict';

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = {
//   async find(ctx) {
//     const { _start, _limit } = ctx.query;
//     const cityresources = await strapi.query('cityresource').find({
//       _start: _start || 0,
//       _limit: _limit || 9, // Default limit if not specified
//     });

//     const totalCount = await strapi.query('cityresource').count();

//     return {
//       cityresources,
//       totalCount,
//     };
//   },
// };
