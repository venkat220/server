const express = require("express");
const router = express.Router();

const followController = require("../controllers/followController");

router.post("/", followController.follow);
router.get("/getAllUser", followController.fetchAll);
router.get("/getFollowers", followController.getFollowers);

module.exports = router;