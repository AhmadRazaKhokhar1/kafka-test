// Kafka Client
import kafka from './index.js';

// Consumer Config
const consumer = kafka.consumer({groupId:'lahore'}); // we can partition consumers based on regions custom by us region is just an example

export default consumer;