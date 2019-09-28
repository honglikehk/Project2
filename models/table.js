module.exports = function(sequelize, DataTypes) {
  var tableOrder = sequelize.define(
    "tableOrder",
    {
      dishName: DataTypes.STRING,
      dishPrice: DataTypes.DECIMAL(10, 2)
    },
    {
      underscored: true
    }
  );

  return tableOrder;
};
