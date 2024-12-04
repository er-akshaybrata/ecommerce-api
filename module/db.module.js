import mongoose from "mongoose";
console.log()
mongoose.connect(
    process.env.production === 'true' ? process.env.DB : process.env.LOCAL_DB
)
export default mongoose