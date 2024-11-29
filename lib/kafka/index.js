// Kafka
import { Kafka } from "kafkajs";

// Kafka Config
const kafka = new Kafka({
    clientId: 'kafka-test-app', // belonging id to refer the app or service (note:this id is not associated with end-users' ids) multiple users can use this client id to consume or produce messages
    brokers: ['9090'] // message brokers are basically the communication mediums between different services or applications to produce or consume messages from each other
});

export default kafka;