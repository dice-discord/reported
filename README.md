# Reported

Utility for submitting server count statistics to Discord bot listings

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

Usage is simple. You can use individual website classes, or have reported handle it for you by passing over API tokens for each bot listing website as well as your bot information.

### Group

This will report the server count (`100`) to the website(s) you provided API tokens for and if applicable, the shard count and servers per shard.

```js
const reported = require('reported');

reported({
  tokens: {
    discordBots: 'abcdef123456'
  },
  settings: {
    id: '123456789',
    serverCount: 100,
    shards: [50, 50]
  }
});
```

### Individual

```js
const { DiscordBots } = require('reported');

const discordBots = new DiscordBots({
  id: '1234566789',
  serverCount: 100,
  shards: [50, 50],
  token: 'abcdef123456'
});

discordBots.submit();
```
