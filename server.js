require('dotenv').config()
const express = require('express')
const contactRouter = require('./routes/contactRoutes')
const usersRouter = require('./routes/usersRoutes')
const connectDB = require('./models/connectionDB')
const errorHandler = require('./middleware/errorHandler')


const app = express()

app.use(express.json())
app.use(errorHandler)
app.use('/home',(req,res)=>{
    res.send("<h1>message for the server")
})

app.use('/api/contacts' , contactRouter)
app.use('/api/users' , usersRouter)

const port = process.env.PORT || 3000
console.log(port)
app.listen(port , ()=>{
    console.log(`Server is listening on port ${port}`)
})

connectDB()