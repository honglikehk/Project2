module.exports = function(sequelize, DataTypes) {
  // eslint-disable-next-line camelcase
  let Admin = sequelize.define("Admin", {
    // eslint-disable-next-line camelcase
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });

  Admin.associate = function(db) {
    Admin.belongsTo(db.Restaurant);
  };

  return Admin;
};
