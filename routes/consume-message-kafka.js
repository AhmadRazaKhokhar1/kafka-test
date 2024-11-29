// Express
import { Router } from "express";

// Controllers
import { kafkaProduceController } from "../controllers/produce-message-kafka.js";
import { kafkaConsumeController } from "../controllers/consume-message-kafka.js";

// Intialize Router
const kafkaRouter = Router();

kafkaRouter.post('/send-message', kafkaProduceController);
kafkaRouter.get('/receive-message', kafkaConsumeController);

export default kafkaRouter;