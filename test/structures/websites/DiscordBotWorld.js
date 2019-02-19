const tap = require("tap");
const sinon = require("sinon");
const moxios = require("moxios");
const { serverCount, shards, token, id } = require("../../settings.json");
const DiscordBotWorld = require("../../../src/structures/websites/DiscordBotWorld");

moxios.install();

const discordBotWorld = new DiscordBotWorld({ id, token });

moxios.stubRequest(discordBotWorld.url, {
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

discordBotWorld.submit({ serverCount }).then(cb);
discordBotWorld.submit({ serverCount, shards }).then(cb);

moxios.wait(() => {
  const req = cb.getCall(0).args[0].config;

  tap.equal(req.headers.Authorization, token, "authorization is correct");
  tap.equal(req.url, discordBotWorld.url, "API endpoint is correct");
  tap.equal(req.method, "post", "uses POST request");
  tap.same(
    JSON.parse(req.data),
    // eslint-disable-next-line camelcase
    { guild_count: serverCount },
    "server count is correct"
  );
  tap.same(
    JSON.parse(cb.getCall(1).args[0].config.data),
    { shards },
    "shards are correct"
  );

  moxios.uninstall();
});
