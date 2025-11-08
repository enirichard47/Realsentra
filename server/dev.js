import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.get("/api/ping", (_req, res) => {
  res.json({ message: "ping" });
});

app.get("/api/demo", (_req, res) => {
  res.json({ message: "This is a demo response from the server" });
});

app.post("/api/waitlist", (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ success: false, message: "Email required" });
  }
  res.json({ success: true, message: "Successfully joined the waitlist" });
});

// Serve static files from built React app
const distPath = path.join(__dirname, "../dist/spa");
app.use(express.static(distPath));

// Fallback to index.html for React Router
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const server = app.listen(port, () => {
  console.log(`🚀 Sentra Wallet dev server running on port ${port}`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
});

process.on("SIGTERM", () => {
  server.close(() => process.exit(0));
});

process.on("SIGINT", () => {
  server.close(() => process.exit(0));
});
