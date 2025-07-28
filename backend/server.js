const express = require("express");
const path = require("path");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

// View Engine Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/add-to-cart", (req, res) => {
  console.log("Cart item:", req.body.productId);
  res.redirect("/checkout");
});



// Start server
app.listen(3000, () => {
  console.log("✅ Server is running on http://localhost:3000");
});