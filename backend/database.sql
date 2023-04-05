-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: findyourtattooartist
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `id` int NOT NULL AUTO_INCREMENT,
  `City` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'Paris'),(2,'Toulouse'),(3,'Lille'),(4,'Pau');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `style`
--

DROP TABLE IF EXISTS `style`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `style` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Style` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `style`
--

LOCK TABLES `style` WRITE;
/*!40000 ALTER TABLE `style` DISABLE KEYS */;
INSERT INTO `style` VALUES (1,'Néo traditionnel'),(2,'Cartoon/Manga'),(3,'Graphique/Géométrique'),(4,'Traditionnel'),(5,'Old School/New School'),(6,'Tribal/Polynésien');
/*!40000 ALTER TABLE `style` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tattooartist`
--

DROP TABLE IF EXISTS `tattooartist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tattooartist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tattooartist`
--

LOCK TABLES `tattooartist` WRITE;
/*!40000 ALTER TABLE `tattooartist` DISABLE KEYS */;
INSERT INTO `tattooartist` VALUES (1,'Kbn_sensibitey','Tatoueur spécialisé dans le tatouage néo traditionnel. Tatoute principalement en couleurs'),(2,'Jacky Tatouage','Tatoueuse spécialisée dans le tatouage floral. Tatoue principalement en noir et gris'),(3,'Sharlotte-san','Tatoueuse spécialisée dans les cartoons et références de pop culture. Tatoue principalement en couleurs'),(4,'Mask Vador','Tatoueur spécialisée dans les cartoons et références de pop culture. Tatoue principalement en couleurs'),(5,'Marty Early','Tatoueur spécialisé dans le tatouage néo traditionnel. Tatoute principalement en couleurs'),(6,'Epsylone','Tatoueur spécialisée dans les cartoons et références de pop culture. Tatoue principalement en couleurs');
/*!40000 ALTER TABLE `tattooartist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tattooartist_has_city`
--

DROP TABLE IF EXISTS `tattooartist_has_city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tattooartist_has_city` (
  `TattooArtist_id` int NOT NULL,
  `City_id` int NOT NULL,
  PRIMARY KEY (`TattooArtist_id`,`City_id`),
  KEY `fk_TattooArtist_has_City_City1_idx` (`City_id`),
  KEY `fk_TattooArtist_has_City_TattooArtist_idx` (`TattooArtist_id`),
  CONSTRAINT `fk_TattooArtist_has_City_City1` FOREIGN KEY (`City_id`) REFERENCES `city` (`id`),
  CONSTRAINT `fk_TattooArtist_has_City_TattooArtist` FOREIGN KEY (`TattooArtist_id`) REFERENCES `tattooartist` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tattooartist_has_city`
--

LOCK TABLES `tattooartist_has_city` WRITE;
/*!40000 ALTER TABLE `tattooartist_has_city` DISABLE KEYS */;
INSERT INTO `tattooartist_has_city` VALUES (5,1),(1,2),(2,2),(3,3),(6,3),(4,4);
/*!40000 ALTER TABLE `tattooartist_has_city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tattooartist_has_style`
--

DROP TABLE IF EXISTS `tattooartist_has_style`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tattooartist_has_style` (
  `TattooArtist_id` int NOT NULL,
  `Style_id` int NOT NULL,
  PRIMARY KEY (`TattooArtist_id`,`Style_id`),
  KEY `fk_TattooArtist_has_Style_Style1_idx` (`Style_id`),
  KEY `fk_TattooArtist_has_Style_TattooArtist1_idx` (`TattooArtist_id`),
  CONSTRAINT `fk_TattooArtist_has_Style_Style1` FOREIGN KEY (`Style_id`) REFERENCES `style` (`id`),
  CONSTRAINT `fk_TattooArtist_has_Style_TattooArtist1` FOREIGN KEY (`TattooArtist_id`) REFERENCES `tattooartist` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tattooartist_has_style`
--

LOCK TABLES `tattooartist_has_style` WRITE;
/*!40000 ALTER TABLE `tattooartist_has_style` DISABLE KEYS */;
INSERT INTO `tattooartist_has_style` VALUES (1,1),(5,1),(3,2),(4,2),(6,2),(2,4);
/*!40000 ALTER TABLE `tattooartist_has_style` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-03 14:21:26


