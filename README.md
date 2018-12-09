# Reported

## About

Reported is a utility for submitting server count statistics to Discord bot listings.

### Listing support

| Name                                                  | Supported |
| ----------------------------------------------------- | --------- |
| [botlist.space](https://botlist.space/)               | ✔         |
| [Bots for Discord](https://botsfordiscord.com/)       | ✔         |
| Bots on Discord                                       | ✔         |
| Carbonitex                                            | ❌        |
| Discord Boats                                         | ✔         |
| discordboats.club                                     | ✔         |
| Discord Bot Index                                     | ✔         |
| Discord Bot List (org)                                | ✔         |
| [Discord Bot List (com)](https://discordbotlist.com/) | ✔         |
| [Discord Bot List (xyz)](https://discordbotlist.xyz/) | ✔         |
| [Discord Bot World](https://discordbot.world/)        | ✔         |
| [Discord Bots (gg)](https://discord.bots.gg/)         | ✔         |
| [Discord Bots (com)](https://discordbotslist.com/)    | ❌        |
| [Discord Bots Group](https://discordbots.group/)      | ✔         |
| [Discord List App ](https://bots.discordlist.app/)    | ✔         |
| [Discord Services](https://discord.services/)         | ✔         |
| [Discord's Best Bots](https://discordsbestbots.xyz/)  | ❌        |
| Discord's Extreme List                                | ❌        |
| Divine Discord Bot List                               | ✔         |

## Installation

### NPM

```bash
npm install reported
```

### Yarn

```bash
yarn add reported
```

## Usage

Using reported is easy with the batch function.
Pass in the tokens for bot lists as well as statistics and reported will handle it for you.

If you'd like you can use individual mode

### Batch

This will report the server count (`100`) to the website(s) you provided API tokens for and if applicable, the shard count and servers per shard.

```js
const { Batch } = require("reported");

const batchReport = new Batch({ botlistSpace: "abcdef123456" }, "123456789");

batchReport.submit({
  serverCount: 100,
  shards: [50, 50]
});
```

### Individual

```js
const { DiscordBots } = require("reported");

const discordBots = new DiscordBots({
  id: "1234566789",
  token: "abcdef123456"
});

discordBots.submit({
  serverCount: 100,
  shards: [50, 50]
});
```
