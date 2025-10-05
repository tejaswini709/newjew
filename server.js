// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve all static files (HTML, CSS, JS, images)
app.use(express.static(__dirname));

// ✅ Default route – send home.html when user opens "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
