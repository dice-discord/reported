/*
Copyright 2018 Jonah Snider

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * @typedef Statistics
 * @type {object}
 * @property {number} serverCount - Total server count.
 * @property {number[]} [shards] - Server/guild count per shard.
 */

const websites = require('../websites.json');

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
