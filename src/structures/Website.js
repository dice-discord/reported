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

const EventEmitter = require("events");

/**
 * Website parent class for bot listing websites.
 */
class Website extends EventEmitter {
  /**
   * @param {WebsiteSettings} settings - Settings for the website.
   */
  constructor(settings) {
    super();

    this.token = settings.token;
    this.id = settings.id;

    if (this.constructor.name === "Website") {
      throw new Error("The base Website cannot be instantiated.");
    }
  }
}

module.exports = Website;
