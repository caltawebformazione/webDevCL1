-- MySQL dump 10.13  Distrib 5.7.24, for Linux (x86_64)
--
-- Host: localhost    Database: feedback
-- ------------------------------------------------------
-- Server version	5.7.24-0ubuntu0.18.04.1

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
-- Current Database: `feedback`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `feedback` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `feedback`;

--
-- Table structure for table `feedbacks`
--

DROP TABLE IF EXISTS `feedbacks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `feedbacks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ticket` int(11) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  `country` varchar(128) DEFAULT NULL,
  `subject` varchar(2048) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ticket` (`ticket`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedbacks`
--

LOCK TABLES `feedbacks` WRITE;
/*!40000 ALTER TABLE `feedbacks` DISABLE KEYS */;
INSERT INTO `feedbacks` VALUES (1,1,'Gaetano Piazza','piazza@caltaweb.it','italy','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-09-27 11:04:20','2018-09-27 11:04:20'),(2,2,'William','welliott0@wisc.edu','italy','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-09-28 12:28:10','2018-09-28 12:28:10'),(3,2,'William','welliott0@wisc.edu','italy','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-09-28 12:28:45','2018-09-28 12:28:45'),(4,4,'Don Chisciotte','chisciotte0@letteratura.edu','italy','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 10:31:59','2018-10-01 10:31:59'),(5,4,'Don Chisciotte','chisciotte0@letteratura.edu','italy','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 10:33:33','2018-10-01 10:33:33'),(6,4,'Don Chisciotte','chisciotte0@letteratura.edu','italy','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 10:34:19','2018-10-01 10:34:19'),(7,4,'Don Chisciotte','chisciotte0@letteratura.edu','italy','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 10:34:53','2018-10-01 10:34:53'),(8,4,'Don Chisciotte','chisciotte0@letteratura.edu','italy','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 10:49:11','2018-10-01 10:49:11'),(9,4,'Don Chisciotte','chisciotte0@letteratura.edu','italy','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 10:50:32','2018-10-01 10:50:32'),(10,4,'Don Chisciotte','chisciotte0@letteratura.edu','italy','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 11:00:47','2018-10-01 11:00:47'),(11,4,'Don Chisciotte','chisciotte0@letteratura.edu','italy','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 11:02:32','2018-10-01 11:02:32'),(12,4,'Don Chisciotte','chisciotte0@letteratura.edu','italy','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 11:04:11','2018-10-01 11:04:11'),(13,4,'Don Chisciotte','chisciotte0@letteratura.edu','italy','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 11:04:49','2018-10-01 11:04:49'),(14,4,'Don Chisciotte','chisciotte0@letteratura.edu','italy','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 11:04:56','2018-10-01 11:04:56'),(15,4,'Don Chisciotte','chisciotte0@letteratura.edu','italy','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 11:05:33','2018-10-01 11:05:33'),(16,16,'William','welliott0@wisc.edu','italy','prova','2018-10-02 07:57:04','2018-10-02 07:57:04'),(17,16,'William','welliott0@wisc.edu','italy','prova','2018-10-02 07:58:05','2018-10-02 07:58:05'),(18,16,'William','welliott0@wisc.edu','italy','prova','2018-10-02 08:22:16','2018-10-02 08:22:16'),(19,16,'William','welliott0@wisc.edu','italy','pippo','2018-10-02 08:26:56','2018-10-02 08:26:56'),(20,16,'William','welliott0@wisc.edu','italy','pippo','2018-10-02 08:27:13','2018-10-02 08:27:13'),(21,16,'William','welliott0@wisc.edu','italy','pippo','2018-10-02 08:27:18','2018-10-02 08:27:18'),(22,16,'William','welliott0@wisc.edu','italy','pippo','2018-10-02 08:31:54','2018-10-02 08:31:54'),(23,16,'William','welliott0@wisc.edu','italy','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-02 09:12:33','2018-10-02 09:12:33'),(24,16,'William','welliott0@wisc.edu','italy','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-02 09:12:53','2018-10-02 09:12:53'),(25,16,'William','welliott0@wisc.edu','italy','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-02 09:13:06','2018-10-02 09:13:06'),(26,16,'William','welliott0@wisc.edu','italy','ppp','2018-10-02 10:10:26','2018-10-02 10:10:26'),(27,16,'William','welliott0@wisc.edu','italy','ooo','2018-10-02 12:58:46','2018-10-02 12:58:46'),(28,2,'William','welliott0@wisc.edu','China','E\' una bella storia','2018-10-04 00:00:00','2018-10-05 00:00:00'),(29,29,'Carl','cross1@mlb.com','Argentina','E\' una bella storia americana','2018-10-04 00:00:00','2018-10-05 00:00:00'),(30,29,'Carl','cross1@mlb.com','Argentina','E\' una bella storia americana','2018-10-04 00:00:00','2018-10-05 00:00:00'),(31,31,'Jeremy','jscott2@cbsnews.com','Italy','E\' una storia cialtrona','2018-10-04 00:00:00','2018-10-05 00:00:00'),(32,29,'Carl','cross1@mlb.com','Argentina','E\' una bella storia americana','2018-10-04 00:00:00','2018-10-05 00:00:00'),(33,31,'Jeremy','jscott2@cbsnews.com','Italy','E\' una storia cialtrona','2018-10-04 00:00:00','2018-10-05 00:00:00'),(34,31,'Jeremy','jscott2@cbsnews.com','Italy','E\' una storia cialtrona','2018-10-04 00:00:00','2018-10-05 00:00:00'),(35,29,'Carl','cross1@mlb.com','Argentina','E\' una bella storia americana','2018-10-04 00:00:00','2018-10-05 00:00:00'),(36,31,'Jeremy','jscott2@cbsnews.com','Italy','E\' una storia cialtrona','2018-10-04 00:00:00','2018-10-05 00:00:00'),(37,2,'William','welliott0@wisc.edu','China','E\' una bella storia','2018-10-04 00:00:00','2018-10-05 00:00:00'),(38,29,'Carl','cross1@mlb.com','Argentina','E\' una bella storia americana','2018-10-04 00:00:00','2018-10-05 00:00:00'),(39,29,'Carl','cross1@mlb.com','Argentina','E\' una bella storia americana','2018-10-04 00:00:00','2018-10-05 00:00:00'),(40,31,'Jeremy','jscott2@cbsnews.com','Italy','E\' una storia cialtrona','2018-10-04 00:00:00','2018-10-05 00:00:00'),(41,29,'Carl','cross1@mlb.com','Argentina','E\' una bella storia americana','2018-10-04 00:00:00','2018-10-05 00:00:00'),(42,31,'Jeremy','jscott2@cbsnews.com','Italy','E\' una storia cialtrona','2018-10-04 00:00:00','2018-10-05 00:00:00'),(43,31,'Jeremy','jscott2@cbsnews.com','Italy','E\' una storia cialtrona','2018-10-04 00:00:00','2018-10-05 00:00:00');
/*!40000 ALTER TABLE `feedbacks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ticket` int(11) NOT NULL,
  `qa` enum('Q','A') NOT NULL DEFAULT 'Q',
  `text` varchar(2048) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ticket` (`ticket`),
  CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`ticket`) REFERENCES `tickets` (`id`),
  CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`ticket`) REFERENCES `tickets` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,1,'Q','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-09-27 11:04:20','2018-09-27 11:04:20'),(2,2,'Q','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-09-28 12:28:10','2018-09-28 12:28:10'),(3,2,'Q','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-09-28 12:28:45','2018-09-28 12:28:45'),(4,4,'Q','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 10:31:59','2018-10-01 10:31:59'),(5,4,'Q','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 10:33:33','2018-10-01 10:33:33'),(6,4,'Q','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 10:34:19','2018-10-01 10:34:19'),(7,4,'Q','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 10:34:53','2018-10-01 10:34:53'),(8,4,'Q','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 10:49:11','2018-10-01 10:49:11'),(9,4,'Q','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 10:50:32','2018-10-01 10:50:32'),(10,4,'Q','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 11:00:47','2018-10-01 11:00:47'),(11,4,'Q','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 11:02:32','2018-10-01 11:02:32'),(12,4,'Q','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 11:04:11','2018-10-01 11:04:11'),(13,4,'Q','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 11:04:49','2018-10-01 11:04:49'),(14,4,'Q','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 11:04:56','2018-10-01 11:04:56'),(15,4,'Q','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-01 11:05:33','2018-10-01 11:05:33'),(16,16,'Q','prova','2018-10-02 07:57:04','2018-10-02 07:57:04'),(17,16,'Q','prova','2018-10-02 07:58:05','2018-10-02 07:58:05'),(18,16,'Q','prova','2018-10-02 08:22:16','2018-10-02 08:22:16'),(19,16,'Q','pippo','2018-10-02 08:26:56','2018-10-02 08:26:56'),(20,16,'Q','pippo','2018-10-02 08:27:13','2018-10-02 08:27:13'),(21,16,'Q','pippo','2018-10-02 08:27:18','2018-10-02 08:27:18'),(22,16,'Q','pippo','2018-10-02 08:31:54','2018-10-02 08:31:54'),(23,16,'Q','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-02 09:12:33','2018-10-02 09:12:33'),(24,16,'Q','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-02 09:12:53','2018-10-02 09:12:53'),(25,16,'Q','Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','2018-10-02 09:13:06','2018-10-02 09:13:06'),(26,16,'Q','ppp','2018-10-02 10:10:26','2018-10-02 10:10:26'),(27,16,'Q','ooo','2018-10-02 12:58:46','2018-10-02 12:58:46'),(28,2,'Q','E\' una bella storia','2018-10-04 00:00:00','2018-10-05 00:00:00'),(29,29,'Q','E\' una bella storia americana','2018-10-04 00:00:00','2018-10-05 00:00:00'),(30,29,'Q','E\' una bella storia americana','2018-10-04 00:00:00','2018-10-05 00:00:00'),(31,31,'Q','E\' una storia cialtrona','2018-10-04 00:00:00','2018-10-05 00:00:00'),(32,29,'Q','E\' una bella storia americana','2018-10-04 00:00:00','2018-10-05 00:00:00'),(33,31,'Q','E\' una storia cialtrona','2018-10-04 00:00:00','2018-10-05 00:00:00'),(34,31,'Q','E\' una storia cialtrona','2018-10-04 00:00:00','2018-10-05 00:00:00'),(35,29,'Q','E\' una bella storia americana','2018-10-04 00:00:00','2018-10-05 00:00:00'),(36,31,'Q','E\' una storia cialtrona','2018-10-04 00:00:00','2018-10-05 00:00:00'),(37,2,'Q','E\' una bella storia','2018-10-04 00:00:00','2018-10-05 00:00:00'),(38,29,'Q','E\' una bella storia americana','2018-10-04 00:00:00','2018-10-05 00:00:00'),(39,29,'Q','E\' una bella storia americana','2018-10-04 00:00:00','2018-10-05 00:00:00'),(40,31,'Q','E\' una storia cialtrona','2018-10-04 00:00:00','2018-10-05 00:00:00'),(41,29,'Q','E\' una bella storia americana','2018-10-04 00:00:00','2018-10-05 00:00:00'),(42,31,'Q','E\' una storia cialtrona','2018-10-04 00:00:00','2018-10-05 00:00:00'),(43,31,'Q','E\' una storia cialtrona','2018-10-04 00:00:00','2018-10-05 00:00:00'),(46,38,'Q','Abbiamo provato col martello, ma non funziona lo stesso!','2018-10-30 10:58:19','2018-10-30 10:58:19'),(47,39,'Q','Ora basta!','2018-10-30 11:06:41','2018-10-30 11:06:41');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tickets`
--

DROP TABLE IF EXISTS `tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tickets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  `country` varchar(128) DEFAULT NULL,
  `subject` varchar(2048) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
INSERT INTO `tickets` VALUES (1,'Gaetano Piazza','piazza@caltaweb.it','italy','Non funziona niente!','2018-09-27 11:04:20','2018-09-27 11:04:20'),(2,'William','welliott0@wisc.edu','italy','It is out of order at all!','2018-09-28 12:28:10','2018-09-28 12:28:10'),(4,'Don Chisciotte','chisciotte0@letteratura.edu','italy','Il fato ci è avverso!','2018-10-01 10:31:59','2018-10-01 10:31:59'),(16,'William','welliott0@wisc.edu','italy','It is still out of order!','2018-10-02 07:57:04','2018-10-02 07:57:04'),(29,'Carl','cross1@mlb.com','Argentina','Espatiados','2018-10-04 00:00:00','2018-10-05 00:00:00'),(31,'Jeremy','jscott2@cbsnews.com','Italy','You are all beginners!','2018-10-04 00:00:00','2018-10-05 00:00:00'),(38,'Minosse','piazza@officina.org','italy','Oggetto nuova versione','2018-10-30 10:58:19','2018-10-30 10:58:19'),(39,'Admin','pazzo@officina.org','italy','Oggetto rotto','2018-10-30 11:06:41','2018-10-30 11:06:41');
/*!40000 ALTER TABLE `tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'John','John@marte.com','2018-09-25 14:55:53','2018-09-25 14:55:53'),(2,'Tano','tanox@giove.com','2018-09-25 14:55:53','2018-09-25 14:55:53');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utentis`
--

DROP TABLE IF EXISTS `utentis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `utentis` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utentis`
--

LOCK TABLES `utentis` WRITE;
/*!40000 ALTER TABLE `utentis` DISABLE KEYS */;
/*!40000 ALTER TABLE `utentis` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-30 14:23:47
