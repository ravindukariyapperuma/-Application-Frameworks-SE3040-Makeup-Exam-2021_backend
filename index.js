const express = require("express");

const app = express();
const cors = require("cors");

//Initialize DB
require("./DbConnection/dbCon")();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//User Details
const UserRoute = require("./Routes/User.route");
app.use("/users", UserRoute);

//Authenticate User
const AuthRoute = require("./Routes/Auth.route");
app.use("/auth", AuthRoute);

//Property Details
const PropertyRoute = require("./Routes/Property.route");
app.use("/property", PropertyRoute);

app.use("/uploads", express.static("uploads"));

app.listen(process.env.PORT, () => {
  console.log("Server started on port " + process.env.PORT);
});
