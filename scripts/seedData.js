require("dotenv").config();
var db = require("../models");
var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  db.Restaurant.bulkCreate([{ name: "Popeyes" }, { name: "Kaka" }], {
    returning: true
  })
    .then(restaurants => {
      console.log("inserted restaruantrs", restaurants);
      const menuItems = [];
      // for (let restaurant of restaurants) {
      menuItems.push({
        item_class: "Main",
        dish_name: "Chickens",
        dish_desc: "kajshdksa",
        dish_price: 10,
        dish_img: "/images/ribeye.jpg",
        RestaurantId: restaurants[0].id
      });
      // }
      return db.MenuItem.bulkCreate(menuItems);
    })
    .then(menuItems => {
      console.log("all menu items inserted");
    });
});
