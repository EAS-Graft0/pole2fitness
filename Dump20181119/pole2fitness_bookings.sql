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
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bookings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `class_id` int(11) DEFAULT NULL,
  `schedule_id` int(11) DEFAULT NULL,
  `name` varchar(450) DEFAULT NULL,
  `email` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=564 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES (364,6,397,'Heather watkins','Hninian90@gmail.com'),(365,6,398,'Heather watkins','Hninian90@gmail.com'),(366,6,399,'Heather watkins','Hninian90@gmail.com'),(367,6,400,'Heather watkins','Hninian90@gmail.com'),(368,6,401,'Heather watkins','Hninian90@gmail.com'),(369,1,372,'Lindsay Tarasconi','linds88810@msn.com'),(370,1,373,'Lindsay Tarasconi','linds88810@msn.com'),(371,1,374,'Lindsay Tarasconi','linds88810@msn.com'),(372,1,375,'Lindsay Tarasconi','linds88810@msn.com'),(373,1,376,'Lindsay Tarasconi','linds88810@msn.com'),(374,2,377,'Jaz','Jasmin.colwill@gmail.com'),(375,2,378,'Jaz','Jasmin.colwill@gmail.com'),(376,2,379,'Jaz','Jasmin.colwill@gmail.com'),(377,2,380,'Jaz','Jasmin.colwill@gmail.com'),(378,2,381,'Jaz','Jasmin.colwill@gmail.com'),(384,2,377,'Chelsea','Chelsea.barnard9@googlemail.com'),(385,2,378,'Chelsea','Chelsea.barnard9@googlemail.com'),(386,2,379,'Chelsea','Chelsea.barnard9@googlemail.com'),(387,2,380,'Chelsea','Chelsea.barnard9@googlemail.com'),(388,2,381,'Chelsea','Chelsea.barnard9@googlemail.com'),(399,2,377,'Chelsea','Chelsea.barnard9@googlemail.com'),(400,2,378,'Chelsea','Chelsea.barnard9@googlemail.com'),(401,2,379,'Chelsea','Chelsea.barnard9@googlemail.com'),(402,2,380,'Chelsea','Chelsea.barnard9@googlemail.com'),(403,2,381,'Chelsea','Chelsea.barnard9@googlemail.com'),(404,6,397,'Toni Curtis','tonii0701@gmail.com'),(405,6,398,'Toni Curtis','tonii0701@gmail.com'),(406,6,399,'Toni Curtis','tonii0701@gmail.com'),(407,6,400,'Toni Curtis','tonii0701@gmail.com'),(408,6,401,'Toni Curtis','tonii0701@gmail.com'),(409,3,382,'Jess Bevan','j.l.b123@me.com'),(410,3,383,'Jess Bevan','j.l.b123@me.com'),(411,3,384,'Jess Bevan','j.l.b123@me.com'),(412,3,385,'Jess Bevan','j.l.b123@me.com'),(413,3,386,'Jess Bevan','j.l.b123@me.com'),(419,2,377,'Demi','xminiskullx@hotmail.co.uk'),(420,2,378,'Demi','xminiskullx@hotmail.co.uk'),(421,2,379,'Demi','xminiskullx@hotmail.co.uk'),(422,2,380,'Demi','xminiskullx@hotmail.co.uk'),(423,2,381,'Demi','xminiskullx@hotmail.co.uk'),(424,2,377,'Megan','meganmay94@hotmail.com'),(425,2,378,'Megan','meganmay94@hotmail.com'),(426,2,379,'Megan','meganmay94@hotmail.com'),(427,2,380,'Megan','meganmay94@hotmail.com'),(428,2,381,'Megan','meganmay94@hotmail.com'),(429,2,377,'Jen els','Jen.elsworth@gmail.com'),(430,2,378,'Jen els','Jen.elsworth@gmail.com'),(431,2,379,'Jen els','Jen.elsworth@gmail.com'),(432,2,380,'Jen els','Jen.elsworth@gmail.com'),(433,2,381,'Jen els','Jen.elsworth@gmail.com'),(434,3,382,'Nic connor','nicholaconnor@outlook.com'),(435,3,383,'Nic connor','nicholaconnor@outlook.com'),(436,3,384,'Nic connor','nicholaconnor@outlook.com'),(437,3,385,'Nic connor','nicholaconnor@outlook.com'),(438,3,386,'Nic connor','nicholaconnor@outlook.com'),(439,6,397,'Carly Jones','Ikkleweed@hotmail.com'),(440,6,398,'Carly Jones','Ikkleweed@hotmail.com'),(441,6,399,'Carly Jones','Ikkleweed@hotmail.com'),(442,6,400,'Carly Jones','Ikkleweed@hotmail.com'),(443,6,401,'Carly Jones','Ikkleweed@hotmail.com'),(444,6,397,'Carly Jones','Ikkleweed@hotmail.com'),(445,6,398,'Carly Jones','Ikkleweed@hotmail.com'),(446,6,399,'Carly Jones','Ikkleweed@hotmail.com'),(447,6,400,'Carly Jones','Ikkleweed@hotmail.com'),(448,6,401,'Carly Jones','Ikkleweed@hotmail.com'),(449,4,387,'Charlotte Edwards','cdt3495@gmail.com'),(450,4,388,'Charlotte Edwards','cdt3495@gmail.com'),(451,4,389,'Charlotte Edwards','cdt3495@gmail.com'),(452,4,390,'Charlotte Edwards','cdt3495@gmail.com'),(453,4,391,'Charlotte Edwards','cdt3495@gmail.com'),(454,4,387,'Anna Wandrasch','anawandrasch@icloud.com'),(455,4,388,'Anna Wandrasch','anawandrasch@icloud.com'),(456,4,389,'Anna Wandrasch','anawandrasch@icloud.com'),(457,4,390,'Anna Wandrasch','anawandrasch@icloud.com'),(458,4,391,'Anna Wandrasch','anawandrasch@icloud.com'),(459,4,387,'Anna Wandrasch','anawandrasch@icloud.com'),(460,4,388,'Anna Wandrasch','anawandrasch@icloud.com'),(461,4,389,'Anna Wandrasch','anawandrasch@icloud.com'),(462,4,390,'Anna Wandrasch','anawandrasch@icloud.com'),(463,4,391,'Anna Wandrasch','anawandrasch@icloud.com'),(464,4,387,'Cari Heath','cariheath8@hotmail.co.uk'),(465,4,388,'Cari Heath','cariheath8@hotmail.co.uk'),(466,4,389,'Cari Heath','cariheath8@hotmail.co.uk'),(467,4,390,'Cari Heath','cariheath8@hotmail.co.uk'),(468,4,391,'Cari Heath','cariheath8@hotmail.co.uk'),(469,4,387,'Cari Heath','cariheath8@hotmail.co.uk'),(470,4,388,'Cari Heath','cariheath8@hotmail.co.uk'),(471,4,389,'Cari Heath','cariheath8@hotmail.co.uk'),(472,4,390,'Cari Heath','cariheath8@hotmail.co.uk'),(473,4,391,'Cari Heath','cariheath8@hotmail.co.uk'),(474,2,377,'Kyleigh','Kyleighdavies@yahoo.co.uk'),(475,2,378,'Kyleigh','Kyleighdavies@yahoo.co.uk'),(476,2,379,'Kyleigh','Kyleighdavies@yahoo.co.uk'),(477,2,380,'Kyleigh','Kyleighdavies@yahoo.co.uk'),(478,2,381,'Kyleigh','Kyleighdavies@yahoo.co.uk'),(514,4,387,'Louise Rogers','Sarah.louise.rogers90@gmail.com'),(515,4,388,'Louise Rogers','Sarah.louise.rogers90@gmail.com'),(516,4,389,'Louise Rogers','Sarah.louise.rogers90@gmail.com'),(517,4,390,'Louise Rogers','Sarah.louise.rogers90@gmail.com'),(518,4,391,'Louise Rogers','Sarah.louise.rogers90@gmail.com'),(519,3,382,'Emily Johnson','Emily-louise@hotmail.co.uk'),(520,3,383,'Emily Johnson','Emily-louise@hotmail.co.uk'),(521,3,384,'Emily Johnson','Emily-louise@hotmail.co.uk'),(522,3,385,'Emily Johnson','Emily-louise@hotmail.co.uk'),(523,3,386,'Emily Johnson','Emily-louise@hotmail.co.uk'),(524,2,377,'Dawid Drzewicki','undefined'),(525,2,378,'Dawid Drzewicki','undefined'),(526,2,379,'Dawid Drzewicki','undefined'),(527,2,380,'Dawid Drzewicki','undefined'),(528,2,381,'Dawid Drzewicki','undefined'),(529,2,377,'Dawid Drzewicki','ddrzewicki@icloud.com'),(530,2,378,'Dawid Drzewicki','ddrzewicki@icloud.com'),(531,2,379,'Dawid Drzewicki','ddrzewicki@icloud.com'),(532,2,380,'Dawid Drzewicki','ddrzewicki@icloud.com'),(533,2,381,'Dawid Drzewicki','ddrzewicki@icloud.com'),(534,2,377,'Dawid Drzewicki','ddrzewicki@icloud.com'),(535,2,378,'Dawid Drzewicki','ddrzewicki@icloud.com'),(536,2,379,'Dawid Drzewicki','ddrzewicki@icloud.com'),(537,2,380,'Dawid Drzewicki','ddrzewicki@icloud.com'),(538,2,381,'Dawid Drzewicki','ddrzewicki@icloud.com'),(539,4,387,'Dawid Drzewicki','ddrzewicki@icloud.com'),(540,4,388,'Dawid Drzewicki','ddrzewicki@icloud.com'),(541,4,389,'Dawid Drzewicki','ddrzewicki@icloud.com'),(542,4,390,'Dawid Drzewicki','ddrzewicki@icloud.com'),(543,4,391,'Dawid Drzewicki','ddrzewicki@icloud.com'),(544,2,377,'Paulina Wieliczko','Paulina_wieliczko@onet.eu'),(545,2,378,'Paulina Wieliczko','Paulina_wieliczko@onet.eu'),(546,2,379,'Paulina Wieliczko','Paulina_wieliczko@onet.eu'),(547,2,380,'Paulina Wieliczko','Paulina_wieliczko@onet.eu'),(548,2,381,'Paulina Wieliczko','Paulina_wieliczko@onet.eu'),(549,4,387,'Paulina Wieliczko','Paulina_wieliczko@onet.eu'),(550,4,388,'Paulina Wieliczko','Paulina_wieliczko@onet.eu'),(551,4,389,'Paulina Wieliczko','Paulina_wieliczko@onet.eu'),(552,4,390,'Paulina Wieliczko','Paulina_wieliczko@onet.eu'),(553,4,391,'Paulina Wieliczko','Paulina_wieliczko@onet.eu'),(554,4,387,'Jo Jenkins','jlrdavies@live.co.uk'),(555,4,388,'Jo Jenkins','jlrdavies@live.co.uk'),(556,4,389,'Jo Jenkins','jlrdavies@live.co.uk'),(557,4,390,'Jo Jenkins','jlrdavies@live.co.uk'),(558,4,391,'Jo Jenkins','jlrdavies@live.co.uk'),(559,2,377,'Joanna Jenkins','jlrdavies@live.co.uk'),(560,2,378,'Joanna Jenkins','jlrdavies@live.co.uk'),(561,2,379,'Joanna Jenkins','jlrdavies@live.co.uk'),(562,2,380,'Joanna Jenkins','jlrdavies@live.co.uk'),(563,2,381,'Joanna Jenkins','jlrdavies@live.co.uk');
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-19 14:27:01
