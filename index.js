import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import ProductRouter from "./Routes/ProductsRoute.js"
import connectRemoteDBAtlas from "./DbConnections/AtlasDbCon.js"

const app = express()
dotenv.config()

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`..........Server running successfully at ${port}..........`))
connectRemoteDBAtlas()
app.use(express.json())
app.use(cors())
app.use(ProductRouter)


