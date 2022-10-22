import { Router } from "express";
import { User } from "../../models";
import { JWT_EXPIRES_IN, JWT_SECRET_KEY } from "../../constants";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User Not found",
      });
    }
    if (!(await bcrypt.compare(password, user.password as string))) {
      return res.status(400).json({
        message: "Password is incorrect",
      });
    }
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
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
        message: "User logged in successfully",
      });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
});

export default router;
