import { Router } from "express";
import { User } from "../../models";
import { JWT_EXPIRES_IN, JWT_SECRET_KEY } from "../../constants";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = Router();

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  //for any empty fields
  if (!email || !password || !name) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    //for duplicate user
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    //creating password user and saving user
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: passwordHash,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await newUser.save();
    const token = jwt.sign(
      {
        name: newUser.name,
        email: newUser.email,
      },
      JWT_SECRET_KEY,
      {
        expiresIn: JWT_EXPIRES_IN,
      }
    );

    return res
      .cookie("jwt", "Bearer " + token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 30,
      })
      .status(200)
      .json({
        message: "User created successfully",
      });

  } catch(error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
});

export default router;
