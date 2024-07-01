'use strict';

/**
 * daily-price service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::daily-price.daily-price');
