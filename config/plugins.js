module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: "AKIA3CMEGY7LSHRGUM7F",
        secretAccessKey: "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",
        region: "us-east-1",
        params: {
          Bucket: "ecommerce-strapi-games-bk",
        },
      },
    },
  },
  // ...
});
