const express = require("express")
const { getGoal } = require("../controllers/goalsControllers")
const router = express.Router()

router.get("/", getGoal)
router.post("/", (req, res) => {
    res.status(200).json({
        message:"post goals"
    })
})
router.put("/:id", (req, res) => {
    res.status(200).json({
        message:`update goal ${req.params.id}`
    })
})
router.delete("/:id", (req, res) => {
    res.status(200).json({
        message:`delete goal ${req.params.id}`
    })
})
module.exports = router