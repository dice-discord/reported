const tap = require("tap");
const sinon = require("sinon");
const moxios = require("moxios");
const { serverCount, token, id } = require("../../settings.json");
const DiscordBotListXyz = require("../../../src/structures/websites/DiscordBotListXyz");

moxios.install();

const discordBotListXyz = new DiscordBotListXyz({ id, token });

moxios.stubRequest(discordBotListXyz.url, {
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

discordBotListXyz.submit({ serverCount }).then(cb);

moxios.wait(() => {
  const req = cb.getCall(0).args[0].config;

  tap.equal(req.headers.Authorization, token, "authorization is correct");
  tap.equal(req.url, discordBotListXyz.url, "API endpoint is correct");
  tap.equal(req.method, "post", "uses POST request");
  tap.same(
    JSON.parse(req.data),
    { count: serverCount },
    "server count is correct"
  );

  moxios.uninstall();
});
