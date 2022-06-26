const passport = require("passport");
const bcrypt = require("bcrypt");
const { Strategy: LocalStrategy } = require("passport-local");
const { User } = require("../models");
const { Op } = require("sequelize");

module.exports = () => {
  let criteria;
  const REG_PHONE = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/i;
  passport.use(
    new LocalStrategy(
      {
        usernameField: "username", // req.body.username
        passwordField: "password", // req.body.password
        passReqToCallback: true,
      },
      async (req, username, password, done) => {
        if (username.indexOf("@" > -1)) {
          criteria = {
            email: username,
          };
        } else if (REG_PHONE.test(username)) {
          criteria = {
            phone: username,
          };
        } else {
          criteria = {
            nickname: username,
          };
        }

        try {
          const user = await User.findOne({ where: { ...criteria } });
          if (!user) {
            return done(null, false, { reason: "존재하지 않는 사용자입니다." }); // (서버 에러, 성공, 클라이언트 에러)
          }

          const match = await bcrypt.compare(password, user.password);

          if (!match) {
            return done(null, false, { reason: "비밀번호가 틀렸습니다." });
          }

          return done(null, user); // 성공 시 사용자 정보 넘겨주기.
        } catch (error) {
          console.error("❌ Server error", error);
          return done(error); // 서버 에러
        }
      }
    )
  );
};
