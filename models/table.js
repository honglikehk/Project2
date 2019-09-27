module.exports = function (sequelize, DataTypes) {
    var tableOrder = sequelize.define("tableOrder", {
        dish_name: DataTypes.STRING,
        dish_price: DataTypes.DECIMAL(10, 2)
    });

    return tableOrder;
};