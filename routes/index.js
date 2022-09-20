import Router from "express";
import sendHotels from "./sendHotels.js";

const router = new Router();

router.use("/", sendHotels);

export default router