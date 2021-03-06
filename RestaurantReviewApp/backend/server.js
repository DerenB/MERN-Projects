// Import items
import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

const app = express()

app.use(cors())
app.use(express.json())

// Some of the initial routes
// Main URL
app.use("/api/v1/restaurants", restaurants)

// Message for a route that doesn't exist
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

// Exporting the app as a module
export default app
