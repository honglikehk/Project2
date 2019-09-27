module.exports = function(sequelize, DataTypes) {
  var Menu = sequelize.define("Menu", {
    dish_name: DataTypes.STRING,
    dish_desc: DataTypes.TEXT,
    dish_price: DataTypes.DECIMAL
  });
  return Menu;
};
