import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import authRoutes from "./src/routes/auth.routes.js";
import connectDB from "./src/db/db.config.js";
import helmet from "helmet";

dotenv.config();
connectDB();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());


app.get("/health", (req, res) =>
  res.status(200).json({ status: "Server running" })
);
app.use("/api/auth", authRoutes);

app.use((req, res) => res.status(404).json({ message: "Route not found" }));
// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong',
    error: process.env.NODE_ENV === 'production' ? {} : err.message,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
});
