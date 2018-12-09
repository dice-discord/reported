/**
 * @typedef WebsiteSettings
 * @type {object}
 * @property {string} token - Token for using the website API.
 * @property {string} id - The bot user ID to update statistics for.
 * @property {number} serverCount - Total server count.
 * @property {number[]} [shards] - Server/guild count per shard.
 */

/**
 * Website parent class for bot listing websites.
 */
class Website {
  /**
   * @param {WebsiteSettings} settings - Settings for the website.
   */
  constructor(settings) {
    this.token = settings.token;
    this.id = settings.id;

    if (this.constructor.name === 'Website') {
      throw new Error('The base Website cannot be instantiated.');
    }
  }
}

module.exports = Website;
