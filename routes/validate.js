const express = require("express");
const router = express.Router();
const VALID_TOKENS = require("../valid_tokens");

router.post("/", (req, res) => {
    // Get the token from headers
    const token = req.get("CSRF-KEY");

    if (!token) {
        return res.status(401).send("No CSRF Key found!");
    }

    // Check if token is valid
    if (!VALID_TOKENS.includes(token)) {
        return res.status(403).send("Invalid CSRF Key!");
    }

    const { name } = req.body;

    res.status(200).send(`Hello there ${name}!`);
});


module.exports = router;