export default ({ env }) => ({
  // // ...
  // upload: {
  //   config: {
  //     provider: "aws-s3",
  //     providerOptions: {
  //       accessKeyId: env("MINIO_ACCESS_KEY_ID"),
  //       secretAccessKey: env("MINIO_ACCESS_SECRET"),
  //       endpoint: env("MINIO_ENDPOINT"),
  //       params: {
  //         Bucket: env("MINIO_BUCKET"),
  //       },
  //     },
  //   },
  // },
  // // ...

  // ...
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        baseUrl: env("CDN_URL"),
        rootPath: env("CDN_ROOT_PATH"),
        s3Options: {
          accessKeyId: env("MINIO_ACCESS_KEY"),
          secretAccessKey: env("MINIO_SECRET_KEY"),
          region: env("MINIO_REGION", "us-east-1"), // optional
          endpoint: env("MINIO_ENDPOINT"), // add this
          s3ForcePathStyle: true, // add this
          signatureVersion: "v4", // add this
          params: {
            ACL: env("MINIO_ACL", "public-read"),
            signedUrlExpires: env("MINIO_SIGNED_URL_EXPIRES", 15 * 60),
            Bucket: env("MINIO_BUCKET"),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
