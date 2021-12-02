require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;
const mongoose = require("mongoose");

//routes
const companyRoute = require("./routes/companyroute");
const productRoute = require("./routes/productroute");
const sellerRoute = require("./routes/sellerroute");


mongoose
.connect(process.env.MONGOURL)
.then( ()=> console.log("Mongo DB connected"));

app.get("/",(req,res)=> res.send("Hello User"));
app.use("/company",companyRoute);
app.use("/product",productRoute);
app.use("/seller",sellerRoute);




app.listen(port, () => console.log(`Example app listening on port 5000!`))