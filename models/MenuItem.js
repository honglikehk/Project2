/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  // eslint-disable-next-line camelcase
  var MenuItem = sequelize.define("MenuItem", {
    // eslint-disable-next-line camelcase
    item_class: DataTypes.STRING,
    dish_name: DataTypes.STRING,
    dish_desc: DataTypes.TEXT,
    dish_price: DataTypes.DECIMAL(10, 2),
    dish_img: DataTypes.STRING
  });

  MenuItem.associate = function(db) {
    MenuItem.belongsTo(db.Restaurant);
  };

  return MenuItem;
};

/*Starter.associate = function(models) {
  // Associating Author with Posts
  // When an Author is deleted, also delete any associated Posts
  Starter.belongsTo(models.Restaurant, {
    onDelete: "cascade"
  });
};

//return Starter;*/
