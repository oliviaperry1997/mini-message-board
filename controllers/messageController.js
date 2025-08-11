const db = require("../db/queries");

async function getMessages(req, res) {
    const messages = await db.getMessages();
    res.render("index", { title: "Mini Messageboard", messages: messages });
}

async function newMessageGet(req, res) {
    res.render("form", { title: "New Message" });
}

async function newMessagePost(req, res) {
    const { text, username } = req.body;
    const messages = await db.getMessages();
    await db.newMessage(text, username);
    console.log(messages);
    res.redirect("/");
}

async function viewMessage(req, res) {
    const { messageId } = req.params;
    const message = await db.viewMessage(messageId);
    if (!message) {
        return res.status(404).send("Message not found");
    }
    console.log(message);
    res.render("message", { title: "View Message", message: message });
}

module.exports = {
    getMessages,
    newMessageGet,
    newMessagePost,
    viewMessage,
}
