const express = require("express");
const { User } = require("../models/user");
const router = express.Router();

// 회원가입
router.post("/", async (req, res) => {
  const { email, name, nickname, password } = req.body;
  const user = await User.create({ email, name, nickname, password });
  return res.send("ok");
});

// 내 정보 불러오기
router.get("/me", (req, res) => {
  return res.json({ success: true });
});

// 로그인
router.post("/login", (req, res) => {
  return res.json(true);
});

// 로그아웃
router.post("/logout", (req, res) => {
  return res.json(true);
});

module.exports = router;
