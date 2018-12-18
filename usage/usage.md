# Usage

Using reported is easy with the batch function. Pass in the tokens for bot lists as well as statistics and reported will handle it for you. You can also use the individual website configurations, if you want to send a request to a single website.

Both examples will report the server count \(`100`\) to the website. If the website supports it it will send the shards \(`[50, 50]`\) as well.

{% tabs %}
{% tab title="Batch" %}
```javascript
const { Batch } = require("reported");

const batchReport = new Batch({ botlistSpace: "abcdef123456" }, "123456789");

batchReport.submit({
  serverCount: 100,
  shards: [50, 50]
});
```
{% endtab %}

{% tab title="Individual" %}
```javascript
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
{% endtab %}
{% endtabs %}
