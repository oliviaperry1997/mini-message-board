const Router = require("express");

const router = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amanda",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Olivia",
        added: new Date(),
    },
];

router.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = router;