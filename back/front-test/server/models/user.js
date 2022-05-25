module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    nickname: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    age: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    gender: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bio: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(20),
      allowNull: true
    },

  }, {
    charset: 'utf8',
    collate: "utf8_general_ci"
  })

  User.associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.User, {foreignKey: "followingId",as: "Followers", through: "Follow"})
    db.User.belongsToMany(db.User, {foreignKey: "followerId",as: "Followings", through: "Follow"})
    db.User.belongsToMany(db.Post, {through: "Like", as: "Likers"});
  }
  return User;
}