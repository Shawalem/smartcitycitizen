'use strict';

/**
 * cityresource controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cityresource.cityresource');


// 'use strict';

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::cityresource.cityresource', {
//   async find(ctx) {
//     let { _start, _limit } = ctx.query;

//     if (!_start) _start = 0;
//     if (!_limit) _limit = 10;

//     // Convert query parameters to integers
//     const start = parseInt(_start);
//     const limit = parseInt(_limit);

//     try {
//       // Fetch city resources with pagination
//       const cityresources = await strapi.query('cityresource').model
//         .find()
//         .skip(start)
//         .limit(limit);

//       // Count the total number of city resources
//       const count = await strapi.query('cityresource').count();

//       return {
//         data: cityresources,
//         count,
//       };
//     } catch (error) {
//       console.error('Error fetching city resources:', error);
//       throw error;
//     }
//   },
// });
