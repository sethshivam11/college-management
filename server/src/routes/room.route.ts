import { Router } from "express";
import { addRooms, deleteRoom, getRooms, getVacantRooms } from "../controllers/room.controller";
import verifyJWT from "../middlewares/auth.middleware";
import { bookRoom } from "../controllers/bookroom.controller";

const router = Router();

router.route("/").get(getRooms);

router.route("/vacant").get(getVacantRooms)

router.use(verifyJWT);

router.route("/new").post(addRooms);

router.route("/book").post(bookRoom);

router.route("/delete/:roomId").delete(deleteRoom);

export default router;
