'use strict';

/**
 * harvest-price service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::harvest-price.harvest-price');
