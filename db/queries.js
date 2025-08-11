const pool = require("./pool");

async function getMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function newMessage(text, username) {
    await pool.query(
        "INSERT INTO messages (text, username, added) VALUES ($1, $2, CURRENT_TIMESTAMP)",
        [text, username]
    );
}

async function viewMessage(messageId) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id=$1", [messageId]);
    return rows[0] || null;
}

module.exports = {
    getMessages,
    newMessage,
    viewMessage,
};
