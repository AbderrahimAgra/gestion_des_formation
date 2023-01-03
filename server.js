const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const { errorHanler } = require('./middleware/errorHandler')
const connectDb = require('./config/db')
const port = process.env.PORT || 3000

connectDb()

const app = express()


app.use(express.json())
app.use(express.urlencoded({extends:false}))

app.use('/api/formation', require('./routes/formationRoutes'))

app.use(errorHanler)

app.listen(port , () => console.log(`Server started on port ${port}`))
