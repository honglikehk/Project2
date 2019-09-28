module.exports = function (sequelize, DataTypes) {
  var Menu = sequelize.define(
    "menu",
    {
      dishName: DataTypes.STRING,
      dishDesc: DataTypes.TEXT,
      dishPrice: DataTypes.DECIMAL(10, 2)
    },
    {
      underscored: true
    }
  );
  return Menu;
};
