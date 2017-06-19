# akyuu-adapter-redis

redis adapter for [akyuu](https://github.com/akyuujs/akyuu)

### Installation
```
npm install akyuu-adapter-ons --save
```

### Configuration
Make sure you have a connections section in your configuration file(s).
And its adapter should be ons.

#### Consumer
 * consumerId
 * topic
 * tags
 * accessKey
 * secretKey
 * options

#### Producer

 * producerId
 * accessKey
 * secretKey
 * options

#### Common

* notStartConsumer

    Not to start consumer, default is false.
* notStartProducer

    Not to start producer, default is false.
>[Read ONS DOC](https://github.com/XadillaX/aliyun-ons)

### Usage
#### Config File
```
// ${project}/config/default/connections.js

"use strict";

module.exports = {
    myOnsAdapter: {
        consummerId,
        producerId,
        topic,
        tags,
        accessKey,
        secretKey,
        options: {

        }
    }
}
```

#### Model File
```
// ${project}/models/${model}.js

"use strict";

const akyuu = require("akyuu");
const ons = akyuu.config.connection.get('myOnsAdapter');

// consumer
const consumer = ons.consumer;

consumer.on("message", function(msg, ack) {
    // DO SOMETHING
});

consumer.listen();

consumer.stop(function() {
    // closed
});

// producer

const producer = ons.producer;

producer.send(topic, tags, content, function(err, messageId) {
    console.log(arguments);
});

// logger

const logger = ons.logger;

logger.on("data", function(data) {
    console.log("[ORIG LOG]", data);
});

```
