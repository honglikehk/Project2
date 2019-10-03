require("dotenv").config();
var db = require("../models");
var menuItemData = require("./menuItemData.json");
var adminData = require("./adminData.json");
var restaurantData = require("./restaurantData.json");
var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`

// Starting the server, syncing our models ------------------------------------/

db.sequelize.sync(syncOptions).then(function() {
  db.Restaurant.bulkCreate(restaurantData, {
    returning: true
  })
    .then(restaurants => {
      console.log("inserted restaruantrs");
      // go over each restaurant
      for (let r = 0; r < restaurants.length; r++) {
        // create menu item
        for (let i = 0; i < menuItemData[r].length; i++) {
          menuItemData[r][i].RestaurantId = restaurants[r].id;
        }
        // create
        adminData[r].RestaurantId = restaurants[r].id;
      }
      let menuItems = [];
      for (let items of menuItemData) {
        menuItems.push(...items);
      }
      return Promise.all([
        db.MenuItems.bulkCreate(menuItems, {
          returning: true
        }),
        db.Admin.bulkCreate(adminData, {
          returning: true
        })
      ]);
    })
    .then(([menuItems, admins]) => {
      console.log(
        `${menuItems.length} menu items & ${admins.length} admins inserted`
      );
    });
});
