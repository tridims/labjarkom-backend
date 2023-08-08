export default ({ env }) => ({
  // AWS S3 / Minio
  // upload: {
  //   enabled: env.bool("MINIO", false),
  //   config: {
  //     provider: "aws-s3",
  //     providerOptions: {
  //       baseUrl: env("MINIO_READ_ACCESS_ENDPOINT", undefined),
  //       // rootPath: env("MINIO_READ_ACCESS_ROOT_PATH"),
  //       s3Options: {
  //         accessKeyId: env("MINIO_ACCESS_KEY"),
  //         secretAccessKey: env("MINIO_SECRET_KEY"),
  //         region: env("MINIO_REGION", "us-east-1"), // optional
  //         endpoint: env("MINIO_ENDPOINT"), // add this
  //         s3ForcePathStyle: true, // add this
  //         signatureVersion: "v4", // add this
  //         params: {
  //           ACL: env("MINIO_ACL", "public-read"),
  //           signedUrlExpires: env("MINIO_SIGNED_URL_EXPIRES", 15 * 60),
  //           Bucket: env("MINIO_BUCKET"),
  //         },
  //       },
  //     },
  //     actionOptions: {
  //       upload: {},
  //       uploadStream: {},
  //       delete: {},
  //     },
  //   },
  // },

  // OpenAPI Documentation
  documentation: {
    enabled: true,
    config: {
      openapi: "3.0.0",
      info: {
        version: "1.0.0",
        title: "DOCUMENTATION",
        description: "Just some docutmentation for the api",
        termsOfService: "Nothing yet to see here",
        contact: {
          name: "tridims",
          email: "tri.dimas@student.ub.ac.id",
          url: "github.com/tridims",
        },
        license: {
          name: "AGPL-3.0",
          url: "https://www.gnu.org/licenses/agpl-3.0.en.html",
        },
      },
      "x-strapi-config": {
        // Leave empty to ignore plugins during generation
        plugins: [],
        path: "/documentation",
      },
      servers: [
        { url: "http://localhost:1337/api", description: "Development server" },
      ],
      externalDocs: {
        description: "Find out more",
        url: "https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html",
      },
      security: [{ bearerAuth: [] }],
    },
  },
});
