require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3003;
const sequelize = require("./database/database");
const User = require("./routes/user");
const Category = require("./routes/category");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/user", User);
app.use("/category", Category);

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
