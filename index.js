const express = require("express");
const app = express();
const port = 5000;
const web = require("./routes/web");
const productView = require("./routes/productPage");
const aboutView = require("./routes/about.js");
const blogView = require("./routes/blog");
const contactView = require("./routes/contacts");
app.set("view engine", "ejs");
app.use("/", web);
app.use("/", productView);
app.use("/", aboutView);
app.use("/", blogView);
app.use("/", contactView);

app.listen(port, () => {
  console.log("Server open at " + port);
});
