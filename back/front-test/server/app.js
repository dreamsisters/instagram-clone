const express= require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const passport = require("passport")
const db = require("./models");

const app = express();
app.set("PORT", process.env.PORT || 3065);
// db
db.sequelize.sync(() => console.log("✅ DB 연결됨")).catch(err => console.error(`❌DB 실패❌ ${err}`))
// passport

app.listen(app.get("PORT"), () => console.log("✅ 서버 실행 중"))

