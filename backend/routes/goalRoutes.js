const express = require("express")
const router = express.Router()
const { getGoal, postGoal,
    updateGoal,
    deleteGoal } = require("../controllers/goalsControllers");

router.route("/").get(getGoal).post(postGoal)

router.route("/:id").put(updateGoal).delete(deleteGoal)

module.exports = router