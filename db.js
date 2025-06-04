import mongoose from 'mongoose'

const MONGO_URI = "mongodb://localhost:27017/fpsbd2025"

export function connectDB(callback){
    mongoose.connect(MONGO_URI)
        .then(() => {
            console.log('Database connected!')
            if(callback) callback()
        })
        .catch((err) => {
            console.log("Failed connect to database:", err)
            process.exit()
        })
}