require("dotenv").config();
var db = require("../models");
var menuItemData = require("./menuItemData.json");
var syncOptions = { force: false };

  // If running a test, set syncOptions.force to true
  // clearing the `testdb`

  // Starting the server, syncing our models ------------------------------------/

  db.sequelize.sync(syncOptions).then(function () {
    db.Restaurant.bulkCreate([{ name: "Popeyes" }, { name: "Kaka" }], {
      returning: true
    })
      .then(restaurants => {
        console.log("inserted restaruantrs");
        for (let r = 0; r < restaurants.length; r++) {
          for (let i = r * (menuItemData.length / 2);
              i < (r + 1) * (menuItemData.length / 2);
              i++) 
              {
            menuItemData[i].RestaurantId = restaurants[r].id;
            }
            }
            console.log(menuItemData);
        return db.MenuItems.bulkCreate(menuItemData, {
          returning: true,
          logging: true
        });
      })
      .then(MenuItems => {
        console.log("all menu items inserted", MenuItems);
      });
  });
