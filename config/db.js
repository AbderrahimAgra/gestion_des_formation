const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

const connectDb = async () =>{
    try {
        const conn= await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected: ${conn.connection.host}`.bgYellow.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDb