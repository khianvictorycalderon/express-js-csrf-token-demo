const express = require("express");
const router = express.Router();

// Sample only
const VALID_TOKENS = [
    "E3X4-A19V",
    "0EMC-8IQS",
    "XC1M-9OAM",
    "1X0A-3MAS",
    "MBN4-93IL"
];

router.get("/token", (_req, res) => {
    
    const token = VALID_TOKENS[Math.floor(Math.random() * VALID_TOKENS.length)];
    res.status(200).send(token);

});

module.exports = router;