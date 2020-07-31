const {Router} = require('express')
const Todo = require('./models/Todo')
const router = Router()

router.get('/todos', async (req, res) => {

    const todos = await Todo.find()
    return res.json(todos)
})

router.post('/todos', async (req, res) => {

    const {content} = await req.body
    if(content.length < 200){

        const todo = await Todo.create({
            content
        })
        return res.json(todo)
    }
    return res.json({})

})

router.delete('/todos/:id', async (req, res) => {
    const {id} = req.params
    await Todo.findByIdAndRemove(id)
    return res.json({ msg: "Todo Destroyed"})
})

router.put('/todos/:id', async (req, res) => {

    const {id} = req.params
    const todo = await Todo.findByIdAndUpdate(id, req.body)
    return res.json(todo)
})


module.exports = router