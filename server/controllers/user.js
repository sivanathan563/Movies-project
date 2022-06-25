import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";

import User from "../models/userDetails.js";

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = Jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "testString",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong.." });
  }
};

export const signUp = async (req, res) => {
  console.log("iiiii");
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exist." });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Password don't match" });

    const hashPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashPassword,
      name: `${firstName} ${lastName}`,
    });
    const token = Jwt.sign(
      { email: result.email, id: result._id },
      "testString",
      { expiresIn: "1h" }
    );
    console.log("ddddd", result);

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong.." });
  }
};
