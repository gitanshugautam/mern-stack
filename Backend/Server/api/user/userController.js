const User = require("./userModel");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

/* ================= CREATE USER ================= */
const createUser = async (req, res) => {
  try {
    const { name, email, rollno, stream, mobile, password, address } = req.body;

    const validation = [];
    if (!name) validation.push("Name is required");
    if (!email) validation.push("Email is required");
    if (!rollno) validation.push("Rollno is required");
    if (!stream) validation.push("Stream is required");
    if (!mobile) validation.push("Mobile is required");
    if (!password) validation.push("Password is required");
    if (!address) validation.push("Address is required");

    if (validation.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        error: validation
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const image = req.file?`uploads/${req.file.filename}`:""

    const newUser = new User({
      name,
      email,
      rollno,
      stream,
      mobile,
      password: hashedPassword,
      address,
      image 
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser
    });

  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Email or Rollno already exists"
      });
    }

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message
    });
  }
};

/* ================= GET ALL USERS ================= */
const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      message: "All users fetched successfully",
      data: users
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message
    });
  }
};

/* ================= GET USER BY ID ================= */
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "User id is required"
      });
    }

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: user
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message
    });
  }
};

/* ================= UPDATE USER ================= */
const updatedUserById = async (req, res) => {
  try {
    const { id } = req.params;

    // ❗ empty body check
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Update data is required"
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser
    });

  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Duplicate value for unique field"
      });
    }

    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message
    });
  }
};

/* ================= DELETE USER ================= */
const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deletedUser
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message
    });
  }
};

/* ================= LOGIN USER ================= */
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required"
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password"
      });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      data: user
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message
    });
  }
};

module.exports = {
  createUser,
  getAllUser,
  getUserById,
  updatedUserById,
  deleteUserById,
  loginUser
};
