const express = require("express");
const router = express.Router();

const User = require("../models/UserModel");

router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { id, name, username, email, password } = req.body;
    const user = new User({
       name, username, email, password
    });
    await user.save();
    res.status(200).json({ message: User });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const User = await User.findById(id);
    res.status(200).json(User);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {  name, username, password, email, isadmin} = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, username, password, email, isadmin },
      { new: true }
    );
    res.status(200).json({ updatedUser });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

router.delete(":/id", async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: "User Deleted" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});
module.exports = router;
