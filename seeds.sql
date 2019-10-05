-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: whateverrr_bunnny
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `menuitems`
--

DROP TABLE IF EXISTS `menuitems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menuitems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item_class` varchar(255) DEFAULT NULL,
  `dish_name` varchar(255) DEFAULT NULL,
  `dish_desc` text,
  `dish_price` decimal(10,2) DEFAULT NULL,
  `dish_img` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `RestaurantId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `RestaurantId` (`RestaurantId`),
  CONSTRAINT `menuitems_ibfk_1` FOREIGN KEY (`RestaurantId`) REFERENCES `restaurants` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menuitems`
--

LOCK TABLES `menuitems` WRITE;
/*!40000 ALTER TABLE `menuitems` DISABLE KEYS */;
INSERT INTO `menuitems` VALUES (1,'Main','Chicken Merlot','Sauted chicken, artichokes, tomatoes, and capers with a touch of merlot wine',15.75,'https://i.postimg.cc/SN90S3k4/Chicken-Merlot.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(2,'Main','Mediterranean Penne','Eggplant, tomatoes, mushrooms, bell peppers, spinach, and fresh basil with a light balsamic vinaigrette in marinara sauce and topped with parmesan cheese',12.50,'https://i.postimg.cc/fbJpPrH1/Penne-Verona-1.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(3,'Main','Spaghetti alla Pomodoro','Sauted tomatoes and basil tossed with garlic and marinara sauce, topped with parmesan cheese',12.25,'https://i.postimg.cc/7Y4vLX6T/spaghetti-pompodor.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(4,'Main','Ravioli in Spinach Sauce','Fresh tomatoes, roasted butternut squash and fresh chopped basil in cream sauce over ravioli topped with parmesan cheese',14.25,'https://i.postimg.cc/B61WjVH2/Ravioli-spinach.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(5,'Main','Lasagna','Fresh pasta layered with ricotta, mozzarella, parmesan, and bolognese sauce topped with parmesan cheese',13.50,'https://i.postimg.cc/G383DMd7/lasagna.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(6,'Main','Ravioli Marinara','Three cheese ravioli in our homemade marinara topped with parmesan cheese',12.50,'https://i.postimg.cc/wBMYpvBf/rav-marinara.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(7,'Main','Spaghetti and Meatballs','Our homemade meatballs with marinara sauce over spaghetti topped with parmesan cheese',13.50,'https://i.postimg.cc/jd4pnNw3/spagehti-meat-balls.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(8,'Main','Chicken Basil Tortellini','Sliced tender chicken breast, butternut squash, and zucchini in a basil pesto cream sauce topped with parmesan cheese',15.25,'https://i.postimg.cc/L8krfPJ0/chicken-basil-tortelini.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(9,'Main','Chicken Alfredo','Our classic fettuccini alfredo with chicken breast topped with parmesan cheese',14.50,'https://i.postimg.cc/pXMvFR0r/chick-alfredo.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(10,'Starter','Mushroom and Prawns','Sauteed tiger prawns and mushrooms with fresh basil and garlic butter sauce, served with bread',8.50,'https://i.postimg.cc/cJkZg3jG/mushroom-prawns.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(11,'Starter','Mozzarella Sticks with Marinara','The classic handmade mozzarella sticks with homemade marinara',7.00,'https://i.postimg.cc/VkRzwpW6/mozza-marinara.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(12,'Starter','Caprese Pompello','Sliced tomatoes, fresh mozzarella cheese and fresh basil with Olive oil vinaigrette',8.00,'https://i.postimg.cc/h46WqcFM/cheese-pomp.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(13,'Starter','Sauteed Fresh Mussels','Sauteed fresh mussels in garlic butter sauce, served with bread',9.00,'https://i.postimg.cc/bJGPQJcD/mussels-garlic-butter.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(14,'Starter','Stuffed Portobello Mushroom','Deep-fried breaded Portobello mushroom stuffed with prosciutto, basil, and cream cheese over Antigua sauce',8.00,'https://i.postimg.cc/FKHNHpTx/mushroom-app.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(15,'Starter','Sampler Platter','Sliced provolone cheese, mozzarella cheese, prosciutto, salami, green olives and pepperoncini',8.50,'https://i.postimg.cc/9XZ5VsWh/starter.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(16,'Desert','Tiramisu ','The classic Italian dessert. A layer of creamy custard set atop espresso-soaked ladyfingers.',5.25,'https://i.postimg.cc/MpZh7T16/tiramasu.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(17,'Desert','Chocolate Cake ','Rich layers of chocolate cake, dark chocolate cheesecake and creamy custard mousse.',5.25,'https://i.postimg.cc/W1jsQTrC/italian-choc-cake.png','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(18,'Desert','Spumoni ','Three scoops of spumoni ice cream topped with claret sauce and whipped cream',5.25,'https://i.postimg.cc/d38zBZW1/spumoni.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(19,'Drinks','Soft drinks (Refills)','',3.00,'https://i.postimg.cc/NMXVsrv4/pop.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(20,'Drinks','Iced Tea (Refills) ','',2.75,'https://i.postimg.cc/Gtj1RgWr/iced-tea.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(21,'Drinks','Hot Tea (Refills) ','',2.75,'https://i.postimg.cc/rm8BJNdP/hot-tea.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(22,'Drinks','Coffee (Refills) ','',2.75,'https://i.postimg.cc/DwG3yZkB/coffee.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(23,'Drinks','Milk','',2.75,'https://i.postimg.cc/J009w753/milk.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(24,'Drinks','Beer','',4.25,'https://i.postimg.cc/5tqcLRtz/beer.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(25,'Drinks','Red Wine','',4.75,'https://i.postimg.cc/ncgtJm5X/red-wine.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1),(26,'Drinks','White Wine','',4.75,'https://i.postimg.cc/bvjcGhq8/white-wine.jpg','2019-10-03 00:47:58','2019-10-03 00:47:58',1);
/*!40000 ALTER TABLE `menuitems` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-05 13:47:13
