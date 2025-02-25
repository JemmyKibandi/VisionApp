const functions = require("firebase-functions");

exports.helloServer = functions.https.onRequest((req, res) => {
    res.send("Hello, server is on!");
});
