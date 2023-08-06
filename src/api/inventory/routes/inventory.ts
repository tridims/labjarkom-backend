/**
 * inventory router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::inventory.inventory", {
  config: {
    find: {
      auth: false,
    },
    findOne: {
      auth: false,
    },
  },
});
