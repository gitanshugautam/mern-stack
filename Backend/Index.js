require("dotenv").config();
const express = require("express");
const connectDb = require("./Server/config/db");
const router = require("./Server/route/Route");
const path = require("path"); // ✅ ADD

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ STATIC FOLDER FOR MULTER IMAGES (IMPORTANT)
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

connectDb();

app.use("/api", router);

const port = process.env.PORT || 5005;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
