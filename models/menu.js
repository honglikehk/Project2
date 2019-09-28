module.exports = function(sequelize, DataTypes) {
  var Menu = sequelize.define("Menu", {
    item_class: DataTypes.STRING,
    dish_name: DataTypes.STRING,
    dish_desc: DataTypes.TEXT,
    dish_price: DataTypes.DECIMAL(10, 2)
    //dish_img: DataTypes.
  });

  Menu.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Menu.belongsTo(models.Restaurant, {
      onDelete: "cascade"
    });
  };

  return Menu;
};
