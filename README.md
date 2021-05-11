# Logstash metrics client

Logstash Metrics client is a Vue typescript plugin to send metrics to a logstash instance. 

The input type of your logstash pipeline must be http

## Send metrics

Add the plugin to vue

``` typescript
import LogstashMetrics from "logstash-metrics-client/index"

Vue.use(LogstashMetrics, {
  ls_url: "http://logstash:8080",
  production: process.env.NODE_ENV == "production"
})

```

### Options

|option|default|description|
|-|-|-|
|`ls_url`|`undefined`|URL to your logstash instance. If undefined or empty, the metrics will be ignored|
|`production`|`true`|Set to false, to log the metrics to console|

### Send metrics anywhere in your code

```typescript
LogstashMetrics.metric("login", {
    "user": "username"
});
```
