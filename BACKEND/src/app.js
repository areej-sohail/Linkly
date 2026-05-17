import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDB from "./config/mongo.config.js";
import ShortUrl from "./models/shorturl.model.js";
import short_url from "./routes/short_url.route.js";
import auth_routes from "./routes/auth.route.js"
import { redirectFromShortUrl } from "./controllers/short_url.controller.js";
import { errorHandler } from "./utils/errorHandling.js";
import cors from "cors"
import { attachUser } from "./utils/attachUser.js";
import cookieParser from 'cookie-parser'
import links_route from "./routes/links.route.js"
dotenv.config()

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(attachUser)
app.use("/api/create", short_url);
app.use("/api/auth", auth_routes);
app.use("/api/links", links_route)
app.get("/:id", redirectFromShortUrl);

app.use(errorHandler)

app.listen(5000, async () => {
    await connectDB();
    console.log("Server running on port 5000");
});