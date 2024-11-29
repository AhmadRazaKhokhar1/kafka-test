// Express
import { Router } from "express";

// Routes
import kafkaRouter from "./consume-message-kafka.js";

// Root Router
const Routes = Router();

Routes.use('/kafka', kafkaRouter);

export default Routes;