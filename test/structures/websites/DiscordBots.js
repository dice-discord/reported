const tap = require("tap");
const sinon = require("sinon");
const moxios = require("moxios");
const { serverCount, shards, token, id } = require("../../settings.json");
const DiscordBots = require("../../../src/structures/websites/DiscordBots");

moxios.install();

const discordBots = new DiscordBots({ id, token });

moxios.stubRequest(discordBots.url, {
  status: 200,
  headers: {
    "Content-Type": "application/json"
  },
  response: {
    success: true,
    code: 200,
    message: "Successfully updated server count"
  }
});

const cb = sinon.spy();

discordBots.submit({ serverCount }).then(cb);
discordBots.submit({ serverCount, shards }).then(cb);

moxios.wait(() => {
  const req = cb.getCall(0).args[0].config;

  tap.equal(req.headers.Authorization, token, "authorization is correct");
  tap.equal(req.url, discordBots.url, "API endpoint is correct");
  tap.equal(req.method, "post", "uses POST request");
  tap.same(
    JSON.parse(req.data),
    // eslint-disable-next-line camelcase
    { guildCount: serverCount },
    "server count is correct"
  );
  tap.same(
    JSON.parse(cb.getCall(1).args[0].config.data),
    { guildCount: serverCount, shardCount: shards.length },
    "shard count is correct"
  );

  moxios.uninstall();
});
