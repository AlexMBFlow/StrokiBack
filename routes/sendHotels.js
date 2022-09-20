import Router from "express";
import HotelController from "../controllers/hotelController.js";

const router = new Router();

router.get("/hotels", HotelController.sendHotelData);

export default router