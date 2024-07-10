import app from "./app"
import dotenv from "dotenv";
import config from "./app/config"
import mongoose from "mongoose"

dotenv.config();
async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port,()=>{
        console.log(`Server is running on port ${config.port}`)
    })
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
    
}
main()
