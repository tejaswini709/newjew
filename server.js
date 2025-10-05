// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve all static files (HTML, CSS, JS, images)
app.use(express.static(__dirname));

// Routes for your HTML pages
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "home.html")));
app.get("/product", (req, res) => res.sendFile(path.join(__dirname, "product.html")));
app.get("/cart", (req, res) => res.sendFile(path.join(__dirname, "cart.html")));
app.get("/billing", (req, res) => res.sendFile(path.join(__dirname, "billing.html")));
app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "login.html")));
app.get("/admin", (req, res) => res.sendFile(path.join(__dirname, "admin.html")));
app.get("/adminlogin", (req, res) => res.sendFile(path.join(__dirname, "adminlogin.html")));

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
