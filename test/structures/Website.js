const tap = require("tap");
const { token, id } = require("../settings.json");
const Website = require("../../src/structures/Website");

tap.throws(
  () => {
    new Website({ token, id });
  },
  {},
  "disallows instantiation"
);
