const Express = require('express')
const app = Express()
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

mongoose.connect('mongodb+srv://otavio:sasukenaruto5555@cluster0-b1t9g.mongodb.net/simple-todo?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(cors())
app.use(Express.json())
app.use(routes)


app.listen(3131)