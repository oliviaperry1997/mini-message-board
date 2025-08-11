const Router = require("express");
const messageController = require("../controllers/messageController")
const router = Router();

router.get("/", messageController.getMessages);
router.get("/new", messageController.newMessageGet);
router.post("/new", messageController.newMessagePost);
router.get("/:messageId", messageController.viewMessage);

module.exports = router;
