const websites = require('../websites.json');

/**
 * @typedef Statistics
 * @type {object}
 * @property {number} serverCount - Total server count.
 * @property {number[]} [shards] - Server/guild count per shard.
 */

/**
 * Batch class for submitting statistics to numerous bot listings at once.
 */
class Batch {
  constructor(tokens, id) {
    this.tokens = tokens;
    this.id = id;
  }
  /**
   * @param {Statistics} statistics - Data to send to bot listings
   */
  submit(statistics) {
    const promises = [];

    Object.entries(this.tokens).forEach(
      ([botList, token]) => {
        const WebsiteClass = require(`./websites/${websites[botList]}`);

        const config = {
          token,
          id: this.id
        };

        const website = new WebsiteClass(config);
        const data = {
          serverCount: statistics.serverCount
        };

        if (statistics.shards) {
          data.shards = statistics.shards;
        }

        promises.push(website.submit(data));
      }
    );

    return Promise.all(promises);
  }
}

module.exports = Batch;
