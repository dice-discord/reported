# Reported

[![Build Status](https://travis-ci.com/dice-discord/reported.svg?branch=master)](https://travis-ci.com/dice-discord/reported)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3fe4127f442845c58b8e503b7f84a471)](https://www.codacy.com/app/dice-discord/reported?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=dice-discord/reported&amp;utm_campaign=Badge_Grade)

## About

Reported is a utility for submitting server count statistics to Discord bot listings.

### Listing support

| Name                                                  | Supported |
| ----------------------------------------------------- | --------- |
| [botlist.space](https://botlist.space/)               | ✔         |
| [Bots for Discord](https://botsfordiscord.com/)       | ❌        |
| Bots on Discord                                       | ✔         |
| Carbonitex                                            | ❌        |
| Dank Bot List                                         | ❌        |
| Discord Boats                                         | ❌        |
| discordboats.club                                     | ✔         |
| Discord Bot Index                                     | ❌        |
| Discord Bot Labs                                      | ❌        |
| Discord Bot List (org)                                | ✔         |
| [Discord Bot List (com)](https://discordbotlist.com/) | ❌        |
| Discord Bot List (xyz)                                | ❌        |
| Discord Bot Reviews                                   | ❌        |
| Discord Bot World                                     | ✔         |
| [Discord Bots (gg)](https://discord.bots.gg/)         | ✔         |
| Discord Bots (com)                                    | ❌        |
| Discord Bots Group                                    | ✔         |
| Discord List App                                      | ❌        |
| Discord Music Bots                                    | ❌        |
| Discord Services                                      | ✔         |
| Discord's Best Bots                                   | ❌        |
| Discord's Extreme List                                | ❌        |
| Divine Discord Bot List                               | ❌        |
| [ls.terminal.ink](https://ls.terminal.ink/)           | ❌        |

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
