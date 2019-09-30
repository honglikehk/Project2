/* eslint-disable indent */
module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define("restaurants", {
    name: DataTypes.STRING
  });
  return Restaurant;
};
