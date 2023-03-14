const getGoal = (req, res) => {
    res.status(200).json({
        message:"get goals"
    })
}
module.exports={
    getGoal
}