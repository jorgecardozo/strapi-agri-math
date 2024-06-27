"use strict";
const stripe = require("stripe")(
  "sk_test_51Oh0LCKt8FCBrFVMqYqhahYwT4V0PESs5rKQsCuJMyHhO4Scipe3r7gsLf6nA15jF3cx5YR7czfIXMbECe2zHUXu00IOJ48hKN"
);

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const calcDiscountPrice = (price, discount) => {
  if (!discount) {
    return price;
  }

  const discountAmount = (pprice * discount) / 1000;
  const result = price - discountAmount;

  return result.toFixed(2);
};

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async paymentOrder(ctx) {
    const { token, products, idUser, addressShipping } = ctx.request.body;

    let totalPayment = 0;
    products.forEach((product) => {
      const priceTemp = calcDiscountPrice(
        product.attributes.price,
        product.attributes.discount
      );
      totalPayment += Number(priceTemp) * product.quantity;
    });

    const charge = await stripe.charges.create({
      amount: Math.round(totalPayment * 100),
      currency: "ars",
      source: token.id,
      description: `User ID: ${idUser}`,
    });

    const data = {
      products,
      user: idUser,
      totalPayment,
      idPayment: charge.id,
      addressShipping,
    };

    const model = strapi.contentTypes("api::order.order");
    const validData = await strapi.entityValidator.validateEntityCreation(
      model,
      data
    );

    const entry = await strapi.db
      .query("api::order.order")
      .create({ data: validData });

    return entry;
  },
}));
