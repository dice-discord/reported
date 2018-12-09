const { DiscordBots } = require('reported');

const discordBots = new DiscordBots({
  id: '1234566789',
  token: 'abcdef123456'
});

discordBots.submit({
  serverCount: 100,
  shards: [50, 50]
});
