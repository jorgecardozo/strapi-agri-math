'use strict';

/**
 * user-invoice service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-invoice.user-invoice');
