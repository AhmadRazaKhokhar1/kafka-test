// Producer
import producer from "../lib/kafka/producer.js";

export const kafkaProduceController = {
    createMessage:async (req, res) => {
      try {
        // Extracing message value from the query 
        const {query:{message}} = req;
        console.log({message});

        // Connecting the producer
        await producer.connect();

        // Producer is creating the message to a specific topic
        producer.send({
            topic:'sample-topic',
            messages:[{value:message}]
        });

        // Disconnecting the producer
        await producer.disconnect();
      } catch (error) {
        console.error({error});
        res.status(500).send({
            message:'An internal server error occured, please try again later.'
        })
      }
    }
}