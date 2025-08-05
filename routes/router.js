const Router = require("express");
const { randomUUID } = require("node:crypto");

const router = Router();

const messages = [
    {
        id: randomUUID(),
        text: "Hi there!",
        user: "Amanda",
        added: new Date(),
    },
    {
        id: randomUUID(),
        text: "Hello World!",
        user: "Olivia",
        added: new Date(),
    },
];

router.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
});
router.get("/new", (req, res) => {
    res.render("form", { title: "New Message" });
});
router.get("/:messageId", (req, res) => {
    const { messageId } = req.params;
    const message = messages.find((msg) => msg.id === messageId);
    if (!message) {
        return res.status(404).send("Message not found");
    }

    res.render("message", { title: "View Message", message });
});

router.post("/new", (req, res) => {
    const { text, user } = req.body;
    messages.push({
        id: randomUUID(),
        text: text,
        user: user,
        added: new Date(),
    });
    console.log(messages);
    res.redirect("/");
});

module.exports = router;
