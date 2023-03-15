const getGoal = (req, res) => {
    res.status(200).json({
        message:"get goals"
    })
}
const setGoal = (req, res) => {
    console.log(req.body)
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add a text field');
    }
    res.status(201).json({
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
    setGoal,
    updateGoal,
    deleteGoal

}