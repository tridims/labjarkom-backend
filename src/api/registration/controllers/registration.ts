/**
 * registration controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::registration.registration",
  () => ({
    async create(ctx) {
      const { data } = ctx.request.body();
      const files = ctx.request.files();

      const parsedData = JSON.parse(data);

      const entry = await strapi.entityService.create(
        "api::registration.registration",
        {
          data: {
            ...parsedData,
          },
          files: {
            file: files["file.cv"],
          },
        }
      );

      ctx.send(entry);
      return entry;
    },
  })
);
