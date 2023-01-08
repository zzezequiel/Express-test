const express = require('express')

const dotenv = require('dotenv')
dotenv.config()
const albumRouter = require('./routes/music.routes')
const {json} = require('body-parser')

const app = express()
app.use(json())

// app.get('/', (req, res) => {
//     res.send('Hello world!')
// })

app.use('/album', albumRouter)

const PORT = 4000
app.listen(process.env.PORT, ()=>{
    console.log(`server is running in port ${process.env.PORT}`)
})