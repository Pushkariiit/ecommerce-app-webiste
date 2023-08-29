import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';

// Configure env
dotenv.config();

// Database config
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`Server.js directory: ${__dirname}`); // Debug log

// REST object
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'client', 'public')));

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// Catch-all route for SPA routing
app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,'client', 'public', 'index.html'));
})

// PORT
const PORT = process.env.PORT || 8080;

// Run listen
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});
