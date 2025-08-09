import express from 'express';
import { checkAuth, login, logout, signup, updateProfile } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';
import { googleLogin } from "../controllers/googleAuth.controller.js";


const router = express.Router();

// router.get("/login/failed")

// router.get('/google/callback',
//     passport.authenticate("goggle",{
//         successRedirect: "http://localhost:5173",
//         failureRedirect: "/login/failed"
//     })
// )
router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)

router.put("/update-profile", protectRoute, updateProfile)

router.get("/check", protectRoute, checkAuth)

router.post("/google", googleLogin);
export default router;
