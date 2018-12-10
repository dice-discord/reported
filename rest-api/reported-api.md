# Reported API

{% hint style="warning" %}
The API is still work in progress, so nothing here will work yet.
{% endhint %}

{% api-method method="post" host="https://example.com" path="/batch" %}
{% api-method-summary %}
Batch submit
{% endapi-method-summary %}

{% api-method-description %}
Submit statistics to several bot lists at once.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="stats.shards" type="array" required=false %}
Array of server counts for each shard.
{% endapi-method-parameter %}

{% api-method-parameter name="stats.serverCount" type="integer" required=true %}
Total number of servers your bot is on.
{% endapi-method-parameter %}

{% api-method-parameter name="stats" type="object" required=true %}
Statistics to send to bot lists.
{% endapi-method-parameter %}

{% api-method-parameter name="tokens" type="object" required=true %}
Object of API tokens keyed by website slug.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=201 %}
{% api-method-response-example-description %}
Your statistics were updated.
{% endapi-method-response-example-description %}

```javascript
{
    "success": true
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Most likely an error occurred while attempting to update your bot's statistics on a listing.
{% endapi-method-response-example-description %}

```javascript
{
    "success": false,
    "error": "..."
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

