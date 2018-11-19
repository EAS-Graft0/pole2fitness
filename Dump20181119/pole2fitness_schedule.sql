-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pole2fitness
-- ------------------------------------------------------
-- Server version	5.7.14-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `class_id` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=402 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
INSERT INTO `schedule` VALUES (372,1,'2018-10-22 18:00:00'),(373,1,'2018-10-29 19:00:00'),(374,1,'2018-11-05 19:00:00'),(375,1,'2018-11-12 19:00:00'),(376,1,'2018-11-19 19:00:00'),(377,2,'2018-10-22 19:05:00'),(378,2,'2018-10-29 20:05:00'),(379,2,'2018-11-05 20:05:00'),(380,2,'2018-11-12 20:05:00'),(381,2,'2018-11-19 20:05:00'),(382,3,'2018-10-23 19:00:00'),(383,3,'2018-10-30 20:00:00'),(384,3,'2018-11-06 20:00:00'),(385,3,'2018-11-13 20:00:00'),(386,3,'2018-11-20 20:00:00'),(387,4,'2018-10-24 18:30:00'),(388,4,'2018-10-31 19:30:00'),(389,4,'2018-11-07 19:30:00'),(390,4,'2018-11-14 19:30:00'),(391,4,'2018-11-21 19:30:00'),(392,5,'2018-10-24 19:30:00'),(393,5,'2018-10-31 20:30:00'),(394,5,'2018-11-07 20:30:00'),(395,5,'2018-11-14 20:30:00'),(396,5,'2018-11-21 20:30:00'),(397,6,'2018-10-25 19:00:00'),(398,6,'2018-11-01 20:00:00'),(399,6,'2018-11-08 20:00:00'),(400,6,'2018-11-15 20:00:00'),(401,6,'2018-11-22 20:00:00');
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-19 14:27:02
