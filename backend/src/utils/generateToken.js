import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  try {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
  } catch (error) {
    console.error("Token generation error:", error);
    throw new Error("Failed to generate token");
  }
};

export default generateToken;
