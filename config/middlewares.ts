export default [
  "strapi::errors",
  // "strapi::security",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "localhost:9000",
            "lab-icn.ub.ac.id",
            "10.34.15.186:9000",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "localhost:9000",
            "lab-icn.ub.ac.id",
            "10.34.15.186:9000",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  // "strapi::cors",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      header: "*",
      origin: ["https://icn-filkom.ub.ac.id/api"],
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
