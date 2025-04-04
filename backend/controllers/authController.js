import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// User Register
export const register = async (req, res) => {
  try {
    // Hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    });

    await newUser.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
    });

  } catch (error) {
    res.status(500).json({
      success: false, 
      message: "Failed to create. Try again",
    });
  }
};

// User Login
export const login = async (req, res) => {
  const email = req.body.email;

  try {
    const user = await User.findOne({ email });

    // If user does not exist
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // If user exists, compare the password
    const checkPassword = await bcrypt.compare(req.body.password, user.password); // Added `await`

    if (!checkPassword) {
      return res.status(401).json({ success: false, message: "Incorrect password or email" });
    }

    const { password, role, ...rest } = user._doc;

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    // Set token in the browser cookie
    res.cookie("accesstoken", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // Corrected expiration
    })
      .status(200)
      .json({ 
        success: true, 
        message: "Successfully logged in", 
        token, 
        data: { ...rest },
        role,
      }); 
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to login. Try again",
    });
  }
};
