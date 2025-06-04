import path from "path"
import express from "express"
import {connectDB} from "./db.js"
import { Patient } from "./model/Patient.js"

const app = express()

app.use("/public", express.static(path.join(process.cwd(), "public")))
app.set("view engine", "ejs")


app.get("/", async (req, res) => {
    const data = await Patient.find()
    return res.render("home", {
        patients: data
    })
})

connectDB(() => {
    app.listen(3000, () => console.log(`Server running at localhost:3000`))
})