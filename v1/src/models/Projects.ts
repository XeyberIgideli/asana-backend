import mongoose from "mongoose"

const ProjectSchema = new mongoose.Schema(
    {
        name: String,
        // user: {
        //     type: mongoose.Types.ObjectId,
        //     ref: "User"
        // }
    }
,{versionKey: false, timestamps: true})

export default mongoose.model("project", ProjectSchema)