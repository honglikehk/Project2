/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  // eslint-disable-next-line camelcase
  var Italian_data = sequelize.define("italians", {
    // eslint-disable-next-line camelcase
    item_class: DataTypes.STRING,
    dish_name: DataTypes.STRING,
    dish_desc: DataTypes.TEXT,
    dish_price: DataTypes.DECIMAL(10, 2),
    dish_img: DataTypes.TEXT,
    isMain: DataTypes.BOOLEAN,
    isStarter: DataTypes.BOOLEAN,
    isDesert: DataTypes.BOOLEAN,
    isDrink: DataTypes.BOOLEAN
  });
  return Italian_data;
};




/*Starter.associate = function(models) {
  // Associating Author with Posts
  // When an Author is deleted, also delete any associated Posts
  Starter.belongsTo(models.Restaurant, {
    onDelete: "cascade"
  });
};

//return Starter;*/
