# Introduction

Reported is a utility for submitting server count statistics to Discord bot listings. It's programmed in Node.js and supports numerous bot listing websites.

# Reported

[![Build Status](https://travis-ci.com/dice-discord/reported.svg?branch=master)](https://travis-ci.com/dice-discord/reported) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/3fe4127f442845c58b8e503b7f84a471)](https://www.codacy.com/app/dice-discord/reported?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=dice-discord/reported&amp;utm_campaign=Badge_Grade) [![NPM](https://nodei.co/npm/reported.svg?compact=true)](https://www.npmjs.com/package/reported) 

## About

Reported is a utility for submitting server count statistics to Discord bot listings.

### Lists

Slug is what you should use as a key for tokens when using batch mode. If you are using individual mode you'll want to use class names.

| Name | Slug | Class Name | Supported |
| :--- | :--- | :--- | :--- |
| [botlist.space](https://botlist.space/) | `botlistSpace` | `BotlistSpace` | ✔ |
| [Bots for Discord](https://botsfordiscord.com/) | `botsForDiscord` | `BotsForDiscord` | ✔ |
| [Bots on Discord](https://bots.ondiscord.xyz/) | `botsOnDiscord` | `BotsOnDiscord` | ✔ |
| [Carbonitex](https://www.carbonitex.net/discord/bots) |  |  | ❌ |
| [Discord Boats](https://discord.boats/) | `discordBoats` | `DiscordBoats` | ✔ |
| [discordboats.club](https://discordboats.club/) | `discordBoatsClub` | `DiscordBoatsClub` | ✔ |
| [Discord Bot Index](https://discordbotindex.com/) | `discordBotIndex` | `DiscordBotIndex` | ✔ |
| [Discord Bot List \(org\)](https://discordbots.org/) | `discordBotList` | `DiscordBotList` | ✔ |
| [Discord Bot List \(com\)](https://discordbotlist.com/) | `discordBotListCom` | `DiscordBotListCom` | ✔ |
| [Discord Bot List \(xyz\)](https://discordbotlist.xyz/) | `discordBotListXyz` | `DiscordBotListXyz` | ✔ |
| [Discord Bot World](https://discordbot.world/) | `discordBotWorld` | `DiscordBotWorld` | ✔ |
| [Discord Bots \(gg\)](https://discord.bots.gg/) | `discordBots` | `DiscordBots` | ✔ |
| [Discord Bots \(com\)](https://discordbotslist.com/) |  |  | ❌ |
| [Discord Bots Group](https://discordbots.group/) | `discordBotsGroup` | `DiscordBotsGroup` | ✔ |
| [Discord List App](https://bots.discordlist.app/) | `discordListApp` | `DiscordListApp` | ✔ |
| [Discord Services](https://discord.services/) | `discordServices` | `DiscordServices` | ✔ |
| [Discord's Best Bots](https://discordsbestbots.xyz/) |  |  | ❌ |
| [Discord's Extreme List](https://discordsextremelist.tk/) | `discordsExtremeList` | `DiscordsExtremeList` | ✔ |
