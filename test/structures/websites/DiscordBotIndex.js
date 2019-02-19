const tap = require("tap");
const sinon = require("sinon");
const moxios = require("moxios");
const { serverCount, token, id } = require("../../settings.json");
const DiscordBotIndex = require("../../../src/structures/websites/DiscordBotIndex");

moxios.install();

const discordBotIndex = new DiscordBotIndex({ id, token });

moxios.stubRequest(discordBotIndex.url, {
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

discordBotIndex.submit({ serverCount }).then(cb);

moxios.wait(() => {
  const req = cb.getCall(0).args[0].config;

  tap.equal(req.headers.Authorization, token, "authorization is correct");
  tap.equal(req.url, discordBotIndex.url, "API endpoint is correct");
  tap.equal(req.method, "post", "uses POST request");
  tap.same(
    JSON.parse(req.data),
    { count: serverCount },
    "server count is correct"
  );

  moxios.uninstall();
});
