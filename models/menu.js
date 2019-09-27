module.exports = function (sequelize, DataTypes) {
 var Menu = sequelize.define("menu", {
    dish_name: DataTypes.STRING,
    dish_desc: DataTypes.TEXT,
    dish_price: DataTypes.DECIMAL(10, 2)
    
  });
  return Menu;

};