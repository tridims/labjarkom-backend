/**
 * event-agenda router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::event-agenda.event-agenda", {
  config: {
    find: {
      auth: false,
    },
    findOne: {
      auth: false,
    },
  },
});
