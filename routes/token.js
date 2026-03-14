import { VALID_TOKENS } from "../valid_tokens";
const express = require("express");
const router = express.Router();

router.get("/", (_req, res) => {
    
    const token = VALID_TOKENS[Math.floor(Math.random() * VALID_TOKENS.length)];
    res.status(200).send(token);

});

module.exports = router;