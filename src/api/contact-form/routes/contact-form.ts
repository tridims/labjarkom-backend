/**
 * contact-form router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::contact-form.contact-form", {
  config: {
    create: {
      auth: false,
    },
  },
});
