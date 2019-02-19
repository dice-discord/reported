const tap = require("tap");
const sinon = require("sinon");
const moxios = require("moxios");
const { serverCount, token, id } = require("../../settings.json");
const DiscordBoatsClub = require("../../../src/structures/websites/DiscordBoatsClub");

moxios.install();

const discordBoatsClub = new DiscordBoatsClub({ id, token });

moxios.stubRequest(discordBoatsClub.url, {
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

discordBoatsClub.submit({ serverCount }).then(cb);

moxios.wait(() => {
  const req = cb.getCall(0).args[0].config;

  tap.equal(req.headers.Authorization, token, "authorization is correct");
  tap.equal(req.url, discordBoatsClub.url, "API endpoint is correct");
  tap.equal(req.method, "post", "uses POST request");
  tap.same(
    JSON.parse(req.data),
    // eslint-disable-next-line camelcase
    { server_count: serverCount },
    "server count is correct"
  );

  moxios.uninstall();
});
