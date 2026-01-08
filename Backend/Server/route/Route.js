const express = require("express");
const router = express.Router();

const upload = require("../middleware/multer"); // ✅ ADD

const {
  createUser,
  getAllUser,
  getUserById,
  updatedUserById,
  deleteUserById,
  loginUser
} = require("../api/user/userController");

const { createAdmin, adminLogin } =
  require("../api/user/admin/adminController");

// USER
router.post("/create-user", upload.single("image"), createUser); //  multer use
router.get("/users", getAllUser);
router.get("/user/:id", getUserById);
router.put("/update-user/:id", updatedUserById);
router.delete("/delete-user/:id", deleteUserById);
router.post("/login", loginUser);

// ADMIN
router.post("/admin", createAdmin);
router.post("/admin/login", adminLogin);

module.exports = router;
