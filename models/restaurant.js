/* eslint-disable indent */
module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define("Restaurant", {
    name: DataTypes.STRING
  });
  return Restaurant;
};
