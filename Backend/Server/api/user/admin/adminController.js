const User = require("../userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const adminName = process.env.ADMIN_NAME;
const adminEmail = process.env.ADMIN_EMAIL;
const adminPass = process.env.ADMIN_PASS;


const createAdmin = async (req, res) => {
  try {
    const admin = await User.findOne({
      email: adminEmail,
      role: "admin"
    });

    if (admin) {
      return res.status(200).json({
        success: true,
        message: "Admin already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(adminPass, 10);


    const newAdmin = new User({
      name: adminName,
      email: adminEmail,
      password: hashedPassword,
      role: "admin",

      rollno: 0,
      mobile: 9999999999,
      address: "Admin Address",
      stream: "ADMIN"        
    });

    await newAdmin.save();

    return res.status(201).json({
      success: true,
      message: "Admin created successfully"
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Admin creation failed",
      error: err.message
    });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "Email, password and role are required"
      });
    }

    const admin = await User.findOne({ email, role });
    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found"
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Password mismatch"
      });
    }

    const token = jwt.sign(
      {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      success: true,
      message: "Admin login successful",
      token,
      data: admin
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message
    });
  }
};

module.exports = {
  createAdmin,
  adminLogin
};
