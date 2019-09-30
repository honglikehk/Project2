-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: y5s2h87f6ur56vae.cbetxkdyhwsb.us-east-1.rds.amazonaws.com    Database: mf5n7ujr436kt9bn
-- ------------------------------------------------------
-- Server version	5.7.23-log

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Dumping data for table `Examples`
--

LOCK TABLES `Examples` WRITE;
/*!40000 ALTER TABLE `Examples` DISABLE KEYS */;
/*!40000 ALTER TABLE `Examples` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Italian`
--

LOCK TABLES `Italian` WRITE;
/*!40000 ALTER TABLE `Italian` DISABLE KEYS */;
INSERT INTO `Italian` VALUES (1,'Main','Chicken Merlot','Saut?ed chicken, artichokes, tomatoes, and capers with a touch of merlot wine',15.75,'tba'),(2,'Main','Mediterranean Penne','Eggplant, tomatoes, mushrooms, bell peppers, spinach, and fresh basil with a light balsamic vinaigrette in marinara sauce and topped with parmesan cheese',12.5,''),(3,'Main','Spaghetti alla Pomodoro','Saut?ed tomatoes and basil tossed with garlic and marinara sauce, topped with parmesan cheese',12.25,''),(4,'Main','Ravioli in Spinach Sauce','Fresh tomatoes, roasted butternut squash and fresh chopped basil in cream sauce over ravioli topped with parmesan cheese',14.25,''),(5,'Main','Lasagna','Fresh pasta layered with ricotta, mozzarella, parmesan, and bolognese sauce topped with parmesan cheese',13.5,''),(6,'Main','Ravioli Marinara','Three cheese ravioli in our homemade marinara topped with parmesan cheese',12.5,''),(7,'Main','Spaghetti and Meatballs','Our homemade meatballs with marinara sauce over spaghetti topped with parmesan cheese',13.5,''),(8,'Main','Chicken Basil Tortellini','Sliced tender chicken breast, butternut squash, and zucchini in a basil pesto cream sauce topped with parmesan cheese',15.25,''),(9,'Main','Chicken Alfredo','Our classic fettuccini alfredo with chicken breast topped with parmesan cheese',14.5,''),(10,'Starter','Mushroom and Prawns','Sauteed tiger prawns and mushrooms with fresh basil and garlic butter sauce, served with bread',8.5,''),(11,'Starter','Mozzarella Sticks with Marinara','The classic handmade mozzarella sticks with homemade marinara',7,''),(12,'Starter','Caprese Pompello','Sliced tomatoes, fresh mozzarella cheese and fresh basil with Olive oil vinaigrette',8,''),(13,'Starter','Sauteed Fresh Mussels','Sauteed fresh mussels in garlic butter sauce, served with bread',9,''),(14,'Starter','Stuffed Portobello Mushroom','Deep-fried breaded Portobello mushroom stuffed with prosciutto, basil, and cream cheese over Antigua sauce',8,''),(15,'Starter','Sampler Platter','Sliced provolone cheese, mozzarella cheese, prosciutto, salami, green olives and pepperoncini',8.5,''),(16,'Desert','Tiramisu ','The classic Italian dessert. A layer of creamy custard set atop espresso-soaked ladyfingers.',5.25,''),(17,'Desert','Chocolate Cake ','Rich layers of chocolate cake, dark chocolate cheesecake and creamy custard mousse.',5.25,''),(18,'Desert','Spumoni ','Three scoops of spumoni ice cream topped with claret sauce and whipped cream',5.25,''),(19,'Drinks','Soft drinks (Refills)','',3,''),(20,'Drinks','Iced Tea (Refills) ','',2.75,''),(21,'Drinks','Hot Tea (Refills) ','',2.75,''),(22,'Drinks','Coffee (Refills) ','',2.75,''),(23,'Drinks','Milk','',2.75,''),(24,'Drinks','Beer','',4.25,''),(25,'Drinks','Red Wine','',4.75,''),(26,'Drinks','White Wine','',4.75,'');
/*!40000 ALTER TABLE `Italian` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Menus`
--

LOCK TABLES `Menus` WRITE;
/*!40000 ALTER TABLE `Menus` DISABLE KEYS */;
/*!40000 ALTER TABLE `Menus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Steak`
--

LOCK TABLES `Steak` WRITE;
/*!40000 ALTER TABLE `Steak` DISABLE KEYS */;
INSERT INTO `Steak` VALUES (1,'Main','Shaved Prime Rib Sandwich ','Shaved prime rib topped with onions, mushrooms and Swiss cheese on French Bread',12.99,'tba'),(2,'Main','Ribeye','Cut fresh and hand-trimmed. 12 ounces of our most juicy and flavorful steak, cut fresh from the rib loin, and distinguished by its rich marbling that runs through.',21.99,''),(3,'Main','New York Strip','Fire-grilled to enhance its distinctive flavor! This thick, 12 oz cut is a steakhouse classic.',21.99,''),(4,'Main','Prime Rib','Slow-roasted for over 11 hours for tenderness and hand-carved to order. ',22.99,''),(5,'Main','Baby Back Ribs','Slow-cooked, fall-off-the-bone baby back ribs seasoned and fire-grilled for extra flavor. Brushed with our housemade sweet and smoky BBQ sauce.',17.49,''),(6,'Main','Fillet and Lobster tail','The best that surf and turf have to offer. Our signature center-cut filet paired with a succulent cold-water lobster tail and melted butter. ',30.29,''),(7,'Main','Sirloin & Half-Rack Baby Back Ribs','Grilled sirloin paired with a half-rack of our slow-roasted, tender BBQ baby back ribs.',21.99,''),(8,'Main','Parmesan Crusted Chicken','Our fresh, juicy, grilled chicken becomes irresistible when we top it with our creamy, crunchy Parmesan and garlic cheese crust.',15.29,''),(9,'Starter','Boneless Buffalo Wings','Hand-breaded all white meat chicken tossed in your choice of Mild or Hot sauce and served with celery and Bleu Cheese dressing.',9.99,''),(10,'Starter','ComboAppetizer','Boneless Buffalo Wings ,tossed in your choice of Mild or Hot sauce, along with hot Bites and Tater Skins. Served with you choice of two dipping sauces.',10.49,''),(11,'Starter','Cheese Fries','A heaping amount of golden brown steak fries topped with melted cheddar cheese and bacon. ',8.49,''),(12,'Starter','Grilled Shrimp','Seasoned shrimp drizzled with garlic lemon pepper butter and served on toasted fresh-baked bread.',7.99,''),(13,'Dessert','Towering Midnight Fudge Cake','Moist chocolate cake with Oreo? cookie crumbles baked inside. Served warm with creamy vanilla bean ice cream, hot fudge and whipped cream.',5.49,''),(14,'Dessert','Hot Fudge Sundae ','Creamy vanilla bean ice cream topped with hot fudge, whipped cream and a cherry.   ',4.69,''),(15,'Dessert','Peanut Butter Treat','A peanut graham cracker crust covered with chocolate peanut ganache, creamy peanut butter silk and topped with peanut butter cups and roasted peanuts. Finished with a drizzle of caramel sauce.',3.99,''),(16,'Dessert','Baked Chocolate Chip Cookie','A warm and gooey classic. A fresh skillet-baked chocolate chip cookie topped with creamy vanilla bean ice cream and a drizzle of chocolate sauce.',4.25,''),(17,'Drinks','Soft drinks (Refills)','',3,''),(18,'Drinks','Iced Tea (Refills) ','',2.75,''),(19,'Drinks','Hot Tea (Refills) ','',2.75,''),(20,'Drinks','Coffee (Refills) ','',2.75,''),(21,'Drinks','Milk','',2.75,''),(22,'Drinks','Beer','',4.25,''),(23,'Drinks','Red Wine','',4.75,''),(24,'Drinks','White Wine','',4.75,'');
/*!40000 ALTER TABLE `Steak` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `menus`
--

LOCK TABLES `menus` WRITE;
/*!40000 ALTER TABLE `menus` DISABLE KEYS */;
/*!40000 ALTER TABLE `menus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tableOrders`
--

LOCK TABLES `tableOrders` WRITE;
/*!40000 ALTER TABLE `tableOrders` DISABLE KEYS */;
/*!40000 ALTER TABLE `tableOrders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tables`
--

LOCK TABLES `tables` WRITE;
/*!40000 ALTER TABLE `tables` DISABLE KEYS */;
/*!40000 ALTER TABLE `tables` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `todos`
--

LOCK TABLES `todos` WRITE;
/*!40000 ALTER TABLE `todos` DISABLE KEYS */;
/*!40000 ALTER TABLE `todos` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-28 14:57:37
