const tap = require("tap");
const sinon = require("sinon");
const moxios = require("moxios");
const { serverCount, token, id } = require("../../settings.json");
const DiscordBotListCom = require("../../../src/structures/websites/DiscordBotListCom");

moxios.install();

const discordBotListCom = new DiscordBotListCom({ id, token });

moxios.stubRequest(discordBotListCom.url, {
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

discordBotListCom.submit({ serverCount }).then(cb);

moxios.wait(() => {
  const req = cb.getCall(0).args[0].config;

  tap.equal(
    req.headers.Authorization,
    `Bot ${discordBotListCom.token}`,
    "authorization is correct"
  );
  tap.equal(req.url, discordBotListCom.url, "API endpoint is correct");
  tap.equal(req.method, "post", "uses POST request");
  tap.same(
    JSON.parse(req.data),
    { guilds: serverCount },
    "server count is correct"
  );

  moxios.uninstall();
});
