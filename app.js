const express = require("express");
const app = express();
const path = require("node:path");

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

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running - listening on port ${PORT}`);
});
