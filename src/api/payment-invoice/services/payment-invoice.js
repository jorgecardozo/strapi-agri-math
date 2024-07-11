'use strict';

/**
 * payment-invoice service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::payment-invoice.payment-invoice');
