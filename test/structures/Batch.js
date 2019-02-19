const tap = require("tap");
const { id, tokens } = require("../settings.json");
const Batch = require("../../src/structures/Batch");

const batch = new Batch(tokens, id);

tap.equal(batch.id, id, "id property is accurate");
tap.equal(batch.tokens, tokens, "tokens property is accurate");
