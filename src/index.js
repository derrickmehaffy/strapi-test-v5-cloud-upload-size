'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    const uploadConfig = strapi.config.get('plugin::upload');
    strapi.log.info(`[debug] Upload plugin config: ${JSON.stringify(uploadConfig, null, 2)}`);

    const middlewares = strapi.config.get('middlewares');
    strapi.log.info(`[debug] Middlewares config: ${JSON.stringify(middlewares, null, 2)}`);
  },
};
