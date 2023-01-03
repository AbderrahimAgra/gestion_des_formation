const express = require('express')
const dotenv = require('dotenv').config()
const { errorHanler } = require('./middleware/errorHandler')
const port = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extends:true}))

app.use('/api/formation', require('./routes/formationRoutes'))

app.use(errorHanler)

app.listen(port , () => console.log(`Server started on port ${port}`))
