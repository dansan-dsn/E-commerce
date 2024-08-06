require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const sequelize = require("./database/database");
const User = require("./routes/user");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/user", User);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database connected successfully.");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });
