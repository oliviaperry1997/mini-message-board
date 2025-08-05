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
router.get("/new", (req, res) => {
    res.render("form");
});
router.post("/new", (req, res) => {
    const { text, user } = req.body;
    messages.push({ text: text, user: user, added: new Date() });
    console.log(messages);
    res.send("Form submitted successfully!");
    res.redirect("/");
});

module.exports = router;
