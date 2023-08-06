/**
 * member-list router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::member-list.member-list", {
  config: {
    find: {
      auth: false,
    },
    findOne: {
      auth: false,
    },
  },
});
