import express from 'express';
import dotenv from 'dotenv';
import cors from "cors"
import authRoutes from './routes/auth.route.js';
import { connectDB } from './lib/db.js';
import cookieparser from 'cookie-parser'
import messageRoutes from "./routes/message.route.js"
import { app, server } from './lib/socket.js';
import path from "path"
// import passport from "passport"

dotenv.config();
const port = process.env.PORT;
const __dirname = path.resolve();

// app.use(passport.initialize());
// app.use(passport.session());
app.use(express.json({ limit: "10mb" })); // Increase JSON payload limit
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors({
    origin: "https://chatapp-1-gmrb.onrender.com",
    credentials: true
}
));
app.use(express.json());
app.use(cookieparser());

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get("*", (req,res)=> {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

server.listen(port,()=>{
    console.log('server is running on port', port);
    connectDB();
})