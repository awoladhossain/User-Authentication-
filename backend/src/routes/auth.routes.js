import express from "express";
import { body } from "express-validator";
import { loginUser, logoutUser, registerUser } from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password").exists().withMessage("Password is required"),
  ],
  loginUser
);
router.post("/logout",logoutUser)

router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Protected route accessed", userId: req.user });
});
export default router;
