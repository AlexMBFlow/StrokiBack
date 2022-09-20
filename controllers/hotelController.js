import { data } from "../data.js";

class HotelController {
    sendHotelData(req, res, next) {
        try {
            const json = JSON.stringify(data)
            res.json(json)
        } catch (e) {
            console.log("Невалидный json", e)
        }

    }
}

export default new HotelController();