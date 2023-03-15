const getGoal = (req, res) => {
    res.status(200).json({
        message:"get goals"
    })
}
const postGoal = (req, res) => {
    res.status(200).json({
        message:"post goals"
    })
}
const updateGoal = (req, res) => {
    res.status(201).json({
        message:`update goal ${req.params.id}`
    })
}
const deleteGoal = (req, res) => {
    res.status(201).json({
        message:`delete goal ${req.params.id}`
    })
}
module.exports={
    getGoal,
    postGoal,
    updateGoal,
    deleteGoal

}