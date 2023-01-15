const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const cors = require('cors')
const { errorHanler } = require('./middleware/errorHandler')
const connectDb = require('./config/db')
const port = process.env.PORT || 3000

connectDb()

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extends:false}))

app.use('/api/formation', require('./routes/formation.routes'))
app.use('/api/user', require('./routes/user.routes'))
app.use('/api/organisme', require('./routes/organisme.routes'))
app.use('/api/auth', require('./routes/auth.routes'))

app.use(errorHanler)

app.listen(port , () => console.log(`Server started on port ${port}`))
