// Consumer
import consumer from "../lib/kafka/consumer.js";

export const kafkaConsumeController = {
  createMessage: async (req, res) => {
    try {
      // Connecting the consumer
      await consumer.connect();

      // Subscribing the consumer to specific topic NOTE: The consumer can also consume multiple topics at a time
      await consumer.subscribe({ topic: 'sample-topic', fromBeginning: true });

      // Publishing messages
      await consumer.run({
        eachMessage: async ({ topic, message, partition }) => {
          console.log({ topic, message, partition });
          res.status(200).send({
            message
          })
        }
      });

      // Disconnecting the consumer
      await consumer.disconnect();
    } catch (error) {
      console.log({ error });
      res.status(500).send({
        message: 'An internal server occured, please try again later.'
      })
    }
  }
}