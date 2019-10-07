module.exports = function(sequelize, DataTypes) {
  // eslint-disable-next-line camelcase
  let TableOrder = sequelize.define("TableOrder", {
    // eslint-disable-next-line camelcase
    order: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2)
  });

  TableOrder.associate = function(db) {
    TableOrder.belongsTo(db.Restaurant);
  };

  return TableOrder;
};
