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

const Website = require("../Website");
const axios = require("axios");

/**
 * Botlist.space configuration.
 */
class BotlistSpace extends Website {
  submit(settings) {
    const url = `https://botlist.space/api/bots/${this.id}`;
    const data = {};

    if (settings.shards) {
      data.shards = settings.shards;
    } else {
      // eslint-disable-next-line camelcase
      data.server_count = settings.serverCount;
    }

    return axios({
      method: "post",
      url,
      headers: { Authorization: this.token },
      data
    });
  }
}

module.exports = BotlistSpace;
