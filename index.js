const express = require("express");
const app = express();
const PORT = 4000;

const productRoute = require("./src/routes/product.route");
const userRoute = require("./src/routes/user.route");

app.get("/", (req, res) => {
  res.send("This is the Home Page");
});
app.use("/products", productRoute);
app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
