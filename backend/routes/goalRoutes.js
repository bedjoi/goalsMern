const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).json({
        message:"suis tres sur de moi meme"
    })
})
router.post("/", (req, res) => {
    res.status(200).json({
        message:"suis tres sur de moi meme"
    })
})
module.exports = router