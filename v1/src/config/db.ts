import mongoose from "mongoose"

const db = mongoose.connection

db.once("open", () => {
    console.log("Database connection is successful!")
})
const
 connectDB = async () => { 
    if(process.env.MONGODB_URI){
        await mongoose.connect(process.env.MONGODB_URI)
    }
}

export default connectDB