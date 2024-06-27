'use strict';

/**
 * bagging service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bagging.bagging');
