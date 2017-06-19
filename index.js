/**
 * Created by maple on 2017/6/13.
 */
"use strict";

const ONS = require("ons");

const Consumer = ONS.Consumer;
const Producer = ONS.Producer;

exports.create = function(config) {
    const consumerId = config.consumerId;
    const producerId = config.producerId;

    const topic = config.topic;
    const tags = config.tags;
    const accessKey = config.accessKey;
    const secretKey = config.secretKey;
    const options = config.options;

    const ons = {};

    const consumer = ons.consumer = new Consumer(consumerId, topic, tags, accessKey, secretKey, options);

    const producer = ons.producer = new Producer(producerId, accessKey, secretKey, options);

    ons.logger = ONS.logger;

    if(!config.notStartConsumer) {
        consumer.init(function(err) {
            if(err) {
                console.error(err);
            }
        });
    }

    if(!config.notStartProducer) {
        producer.start(function(err) {
            if(err) {
                console.error(err);
            }
        });
    }

    return ons;
};