const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>Server is up and running!</h1>");
});

module.exports = router;