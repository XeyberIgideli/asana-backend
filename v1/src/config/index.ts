import {configENV} from "./server"
import connectDB from "./db"

export const config = () => {
   configENV()
   connectDB()
}