const express = require('express');
const verifyToken = require('../middlewares/authMiddleware'); 
const authorizeRoles = require('../middlewares/roleMiddleware');

const router = express.Router();

// ONLY ADMIN CAN ACCESS
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
    res.json({ message: "Admin Content" });
});

// ONLY ADMIN AND MANAGER CAN ACCESS
router.get("/manager", verifyToken, authorizeRoles("admin", "manager"), (req, res) => {
    res.status(200).json({ message: "Manager Content" });
});

// ALL USERS CAN ACCESS
router.get("/user", verifyToken, authorizeRoles("admin", "manager", "user"), (req, res) => {
    res.status(200).json({ message: "User Content" });
});
module.exports = router;