require("dotenv/config")
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.js")[env];

// node와 sql 연결
const sequelize = new Sequelize(config.database,config.username, config.password, config);
const User = require("./user")(sequelize, Sequelize);
const Post = require("./post")(sequelize, Sequelize);
const Hashtag = require("./hashtag")(sequelize, Sequelize);
const Image = require("./image")(sequelize, Sequelize);
const Comment = require("./comment")(sequelize, Sequelize);


// table 만들기
const db = {};
db.User = User;
db.Post = Post;
db.Hashtag = Hashtag;
db.Image = Image;
db.Comment = Comment;


// 테이블 간/내 관계 만들기
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }

})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

